import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complaint } from '../../van'
@Injectable({
  providedIn: 'root'
})
export class AdmincomserviceService {
  public complaints: Complaint = new Complaint;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  readComplaint(){
    return this.http.get(this.baseURi+'/admin/complaints',{headers:this.headers} )
  }

  readSpecificComplaint(id:String){
    return this.http.get(this.baseURi+'/admin/complaint'+id,{headers:this.headers} )
  }

  updateComplaint(complaint:Complaint,id:String){
    return this.http.patch(this.baseURi+'/admin/updatecomplaint/' +id, complaint,{headers:this.headers} )
  }


  setter(complain:Complaint){
    this.complaints = complain;
  }
  getter(){
    return this.complaints;
  }
}
