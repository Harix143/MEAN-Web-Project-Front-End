import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RouteServiceService } from '../route-service.service';
import { Route } from '../../../van';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateRouteComponent implements OnInit {
  public routes: Route = new Route
  constructor(private router: Router, public routeService: RouteServiceService) { }

  ngOnInit(): void {
    this.routes = this.routeService.getter()!;

  }
  newRoute(event:any){
    event.preventDefault()
    this.routeService.setter(new Route());
    this.router.navigateByUrl('/admin/routes/create')
  }

  updateRoute(){
    this.routeService.updateRoute(this.routes, this.routes._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/routes') 
      },error=>{
        console.log(error)
      }
    )
  }
}
