import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from '../../van';
@Injectable({
  providedIn: 'root'
})
export class StdschServiceService {
  public schedules: Schedule = new Schedule;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createSchedule(schedules:Schedule, sid: String){
    return this.http.post(this.baseURi+'/student/createschedule/'+sid, schedules,{headers:this.headers} )
  }

  readSchedule(sid:String){
    return this.http.get(this.baseURi+'/student/schedules/' +sid,{headers:this.headers} )
  }

  readSpecificSchedule(sid:String, id:String){
    return this.http.get(this.baseURi+'/student/schedule/'+sid+'/'+id,{headers:this.headers} )
  }

  // updateSchedules(schedules:Schedule,id:String){
  //   return this.http.patch(this.baseURi+'/admin/updateSchedule/' +id, schedules,{headers:this.headers} )
  // }

  deleteSchedules(sid:String,id:String){
    return this.http.delete(this.baseURi+'/student/deleteschedule/'+sid+'/'+id,{headers:this.headers} )
  }

  setter(schedule:Schedule){
    this.schedules = schedule;
  }
  getter(){
    return this.schedules;
  }
}
