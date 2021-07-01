import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StdschServiceService } from '../stdsch-service.service';
import { Schedule } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-liststdsch',
  templateUrl: './liststdsch.component.html',
  styleUrls: ['./liststdsch.component.scss']
})
export class ListstdschComponent implements OnInit {

  public schedules: Schedule[]
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Schedulerservice: StdschServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.readSchedules(this._id)
  }


  newSchedule(event:any){
    event.preventDefault()
    this.Schedulerservice.setter(new Schedule());
    this.router.navigateByUrl('/student/schedule/create')
  }

  readSchedules(id: String){this.Schedulerservice.readSchedule(id).subscribe((
    data:any[])=>{
      //  console.log(data);
      this.schedules = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(schedule: Schedule){
    this.Schedulerservice.deleteSchedules(this._id, schedule._id).subscribe(
      data=>{
        alert("Schedule Data Deleted Successfully!")
     this.schedules!.splice(this.schedules!.indexOf(schedule),1)
      },error=>{
        console.log(error)
      }
  
    )

  }


  doView(Schedule){
    this.Schedulerservice.setter(Schedule)
    this.router.navigateByUrl('student/schedules/specific')
  }


}
