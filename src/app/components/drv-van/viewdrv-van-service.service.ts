import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewdrvVanServiceService {

  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  getAssignedVan(driver_id){
    return this.http.get(this.baseURi + '/driver/assignedvan/'+driver_id, { headers: this.headers })
  }
}