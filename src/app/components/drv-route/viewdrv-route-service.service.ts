import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewdrvRouteServiceService {

  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  getAssignedRoute(driver_id){
    return this.http.get(this.baseURi + '/driver/assignedroutetodriver/'+driver_id, { headers: this.headers })
  }
}