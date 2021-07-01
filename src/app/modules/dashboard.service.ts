import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Complaint} from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public complaint: Complaint = new Complaint;
  private baseURi: String = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http :HttpClient) { }

  readComplaints(){
    return this.http.get(this.baseURi+'/admin/complaints',{headers:this.headers} )
  }

  readRecentStudents(){
    return this.http.get(this.baseURi+'/admin/students',{headers:this.headers} )
  }

  readRecentDrivers(){
    return this.http.get(this.baseURi+'/admin/drivers',{headers:this.headers} )
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