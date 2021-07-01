import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StdschServiceService } from '../stdsch-service.service';
import { Schedule } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';
@Component({
  selector: 'app-viewstdsch',
  templateUrl: './viewstdsch.component.html',
  styleUrls: ['./viewstdsch.component.scss']
})
export class ViewstdschComponent implements OnInit {

  public schedules: Schedule = new Schedule
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Schedulerservice: StdschServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.schedules = this.Schedulerservice.getter();
  }


  newSchedule(event:any){
    event.preventDefault()
    this.Schedulerservice.setter(new Schedule());
    this.router.navigateByUrl('/student/schedule/create')
  }

  viewSchdule(){
   
    this.router.navigateByUrl('/student/schedule')
    
    
  }

}
