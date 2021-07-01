import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StdschServiceService } from '../stdsch-service.service';
import { Schedule } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-createstdsch',
  templateUrl: './createstdsch.component.html',
  styleUrls: ['./createstdsch.component.scss']
})
export class CreatestdschComponent implements OnInit {

  public schedules: Schedule = new Schedule
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Schedulerservice: StdschServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
  }


  newSchedule(event:any){
    event.preventDefault()
    this.Schedulerservice.setter(new Schedule());
    this.router.navigateByUrl('/student/schedule/create')
  }

  createSchdule(){
    this.Schedulerservice.createSchedule(this.schedules,this._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/student/schedule')
      },error=>{
        console.log(error)
      }
    )
  }
}
