import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Users/user-service.service';
import { ViewstdDriverServiceService } from '../viewstd-driver-service.service';
import { Driver } from 'src/app/models/users.model';

@Component({
  selector: 'app-viewstd-driver',
  templateUrl: './viewstd-driver.component.html',
  styleUrls: ['./viewstd-driver.component.scss']
})
export class ViewstdDriverComponent implements OnInit {

  driver: Driver;
  userDetails : any;

  constructor(private viewDriverService : ViewstdDriverServiceService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload();
    console.log(this.userDetails);
    console.log(this.userDetails['_id']);
    this.getAssignedDriver(this.userDetails['_id']);
  }
  getAssignedDriver(stdId){
      this.viewDriverService.getAssignedDriver(stdId).subscribe((data:any[])=>{
      this.driver = data['driver'];
    },
    error=>{
      console.log(error);
    });
  }
}