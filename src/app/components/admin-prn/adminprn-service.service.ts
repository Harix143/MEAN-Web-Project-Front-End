import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parent } from '../../van'
@Injectable({
  providedIn: 'root'
})
export class AdminprnServiceService {
  public parents: Parent = new Parent;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createParent(parent:Parent){
    return this.http.post(this.baseURi+'/admin/addparent', parent,{headers:this.headers} )
  }

  readParent(){
    return this.http.get(this.baseURi+'/admin/parents',{headers:this.headers} )
  }

  readSpecificParent(id:String){
    return this.http.get(this.baseURi+'/admin/parent'+id,{headers:this.headers} )
  }

  updateParent(parent:Parent,id:String){
    return this.http.patch(this.baseURi+'/admin/updateparent/' +id, parent,{headers:this.headers} )
  }

  deleteParent(id:String){
    return this.http.delete(this.baseURi+'/admin/deleteparent/'+id,{headers:this.headers} )
  }

  setter(parent:Parent){
    this.parents = parent;
  }
  getter(){
    return this.parents;
  }
}
