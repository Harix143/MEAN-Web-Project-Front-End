import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Users/user-service.service';
import { Van } from 'src/app/van';
import { ViewdrvVanServiceService } from '../viewdrv-van-service.service';

@Component({
  selector: 'app-viewdrv-van',
  templateUrl: './viewdrv-van.component.html',
  styleUrls: ['./viewdrv-van.component.scss']
})
export class ViewdrvVanComponent implements OnInit {

  van: Van;
  userDetails: any;
  airCond: string;
  serverErrorMessages: string;

  constructor(private viewVanService: ViewdrvVanServiceService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload();
    console.log(this.userDetails);
    console.log(this.userDetails['_id']);
    this.getAssignedRoute(this.userDetails['_id']);
  }
  getAssignedRoute(drvId) {
    this.viewVanService.getAssignedVan(drvId).subscribe((data: any[]) => {
      this.van = data['van'];
      console.log(this.van);
        if (this.van.air_condition == true)
          this.airCond = 'Yes';
        else
          this.airCond = 'No';
    },
      error => {
        this.serverErrorMessages =error.error.message;
        console.log(error);
      });
  }


}