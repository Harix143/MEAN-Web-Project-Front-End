import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RouteServiceService } from '../route-service.service';
import { Route } from '../../../van';
@Component({
  selector: 'app-viewroute',
  templateUrl: './viewroute.component.html',
  styleUrls: ['./viewroute.component.scss']
})
export class ViewrouteComponent implements OnInit {

  public routes: Route = new Route
  constructor(private router: Router, public routeService: RouteServiceService) { }
  ngOnInit(): void {
    this.routes = this.routeService.getter()!;
  }

  viewRoute(){
    this.router.navigateByUrl('/admin/routes') 
  }

  newRoute(event:any){
    event.preventDefault()
    this.routeService.setter(new Route());
    this.router.navigateByUrl('/admin/routes/create')
  }
}
