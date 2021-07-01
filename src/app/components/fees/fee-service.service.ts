import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fee } from '../../van';
@Injectable({
  providedIn: 'root'
})
export class FeeServiceService {
  public fees: Fee = new Fee;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createFee(fees:Fee){
    return this.http.post(this.baseURi+'/admin/addchallan', fees,{headers:this.headers} )
  }

  readFee(){
    return this.http.get(this.baseURi+'/admin/fees',{headers:this.headers} )
  }

  readSpecificFee(id:String){
    return this.http.get(this.baseURi+'/admin/fee'+id,{headers:this.headers} )
  }

  updateFee(fees:Fee,id:String){
    return this.http.patch(this.baseURi+'/admin/updatefee/' +id, fees,{headers:this.headers} )
  }

  deleteFee(id:String){
    return this.http.delete(this.baseURi+'/admin/deletefee/'+id,{headers:this.headers} )
  }

  setter(Fees:Fee){
    this.fees = Fees;
  }
  getter(){
    return this.fees;
  }
}
