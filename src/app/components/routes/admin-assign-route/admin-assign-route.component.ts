import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RouteServiceService } from '../route-service.service';
import { Driver } from 'src/app/models/users.model';
import { Route } from 'src/app/van';
@Component({
  selector: 'app-admin-assign-route',
  templateUrl: './admin-assign-route.component.html',
  styleUrls: ['./admin-assign-route.component.scss']
})
export class AdminAssignRouteComponent implements OnInit {
  public drivers: Driver[];
  public driver :Driver = new Driver;
  public route: Route = new Route;
  constructor(private router: Router, private RouteService: RouteServiceService) { }

  ngOnInit(): void {
    this.route = this.RouteService.getter();
    this.getAvailableDrivers();
    
  }
  assignRoute(driver){
   
    this.assignRouteHelper(driver._id, this.route._id);
  }
  assignRouteHelper(driverID, RouteId){
    this.RouteService.assignRoute(driverID, RouteId).subscribe(
      data=>{
        alert('Route has been Assigned to Driver');
        this.router.navigateByUrl('/admin/routes');
      },error=>{
        console.log(error)
      }
    )
  }
  newRoute(event:any){
    event.preventDefault()
    this.RouteService.setter(new Route());
    this.router.navigateByUrl('/admin/routes/create')
  }

  getAvailableDrivers(){
    this.RouteService.readAvailableDrivers().subscribe((data:any[])=>{
      this.drivers=data['results'];
    },
    error=>{
      console.log(error);
    }
    )
  }

}
