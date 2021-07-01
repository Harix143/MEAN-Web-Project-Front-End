import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RouteServiceService } from '../route-service.service';
import { Route } from '../../../van';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListRouteComponent implements OnInit {
  public routes: Route[]

  constructor(private router: Router, public routeService: RouteServiceService) { }

  ngOnInit(): void {
    this.readRoutes();

  }

  newRoute(event:any){
    event.preventDefault()
    this.routeService.setter(new Route());
    this.router.navigateByUrl('/admin/routes/create')
  }

  readRoutes(){this.routeService.readRoute().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.routes = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(route: Route){
    this.routeService.deleteRoute(route._id).subscribe(
      data=>{
        alert("Route Deleted Successfully!")
     this.routes!.splice(this.routes!.indexOf(route),1)
      },error=>{
        console.log(error)
      }
  
    )

  }
  doUpdate(route){
    this.routeService.setter(route)
    this.router.navigateByUrl('admin/routes/update')

  }


  doView(route){
    this.routeService.setter(route)
    this.router.navigateByUrl('admin/routes/specific')
  }
  getAvailableDrivers(route){
    this.routeService.setter(route);
    this.router.navigateByUrl('admin/routes/assign-route') 
  }
}
