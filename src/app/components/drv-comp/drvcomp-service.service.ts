import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complaint } from '../../van';

@Injectable({
  providedIn: 'root'
})
export class DrvcompServiceService {
  public complaints: Complaint = new Complaint;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createComplaint(complaints:Complaint, sid: String){
    return this.http.post(this.baseURi+'/driver/filecomplaint/'+sid, complaints,{headers:this.headers} )
  }

  readComplaint(sid:String){
    return this.http.get(this.baseURi+'/driver/complaints/' +sid,{headers:this.headers} )
  }

  readSpecificComplaint(sid:String, id:String){
    return this.http.get(this.baseURi+'/driver/complaint/'+sid+'/'+id,{headers:this.headers} )
  }

  // updateComplaints(Complaints:Complaint,id:String){
  //   return this.http.patch(this.baseURi+'/admin/updateComplaint/' +id, Complaints,{headers:this.headers} )
  // }

  deleteComplaints(sid:String,id:String){
    return this.http.delete(this.baseURi+'/driver/deletecomplaint/'+sid+'/'+id,{headers:this.headers} )
  }

  setter(complaint:Complaint){
    this.complaints = complaint;
  }
  getter(){
    return this.complaints;
  }
}
