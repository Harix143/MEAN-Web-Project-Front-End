import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Complaint} from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class StdServicesService {

  public complaint: Complaint = new Complaint;
  private baseURi: String = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http :HttpClient) { }

  readComplaint(sid:String){
    return this.http.get(this.baseURi+'/student/complaints/' +sid,{headers:this.headers} )
  }

  cards() {
    return [71, 78, 39, 66];
  }

  setter(complaint:Complaint){
    this.complaint = complaint;
  }
  getter(){
    return this.complaint;
  }
}
