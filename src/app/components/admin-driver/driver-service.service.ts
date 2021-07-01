import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver } from '../../van'
@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {
  public drivers: Driver = new Driver;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createDriver(drivers:Driver){
    return this.http.post(this.baseURi+'/admin/adddriver', drivers,{headers:this.headers} )
  }

  readDriver(){
    return this.http.get(this.baseURi+'/admin/drivers',{headers:this.headers} )
  }

  readSpecificDriver(id:String){
    return this.http.get(this.baseURi+'/admin/driver'+id,{headers:this.headers} )
  }

  updateDriver(drivers:Driver,id:String){
    return this.http.patch(this.baseURi+'/admin/updatedriver/' +id, drivers,{headers:this.headers} )
  }

  deleteDriver(id:String){
    return this.http.delete(this.baseURi+'/admin/deletedriver/'+id,{headers:this.headers} )
  }

  readAvailableStudents() {
    return this.http.get(this.baseURi + '/admin/availablestudents', { headers: this.headers })
  }
  assignDriver(sId, dID) {
    return this.http.patch(this.baseURi + '/admin/assign/' + sId + '/driver/' + dID,{ headers: this.headers })
  }

  setter(Drivers:Driver){
    this.drivers = Drivers;
  }
  getter(){
    return this.drivers;
  }
}
