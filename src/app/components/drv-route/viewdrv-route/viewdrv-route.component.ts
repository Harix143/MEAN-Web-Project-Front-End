import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Users/user-service.service';
import { Route } from 'src/app/van';
import { ViewdrvRouteServiceService } from '../viewdrv-route-service.service';

@Component({
  selector: 'app-viewdrv-route',
  templateUrl: './viewdrv-route.component.html',
  styleUrls: ['./viewdrv-route.component.scss']
})
export class ViewdrvRouteComponent implements OnInit {

  route: Route;
  userDetails : any;
  serverErrorMessages: any;

  constructor(private viewRouteService : ViewdrvRouteServiceService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload();
    console.log(this.userDetails);
    console.log(this.userDetails['_id']);
    this.getAssignedRoute(this.userDetails['_id']);
  }
  getAssignedRoute(drvId){
      this.viewRouteService.getAssignedRoute(drvId).subscribe((data:any[])=>{
      this.route = data['route'];
    },
    error=>{
      this.serverErrorMessages =error.error.message;
      console.log(error);
      console.log(error);
    });
  }

}