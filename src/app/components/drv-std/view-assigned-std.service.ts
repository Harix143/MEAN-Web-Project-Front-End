import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewAssignedStdService {

  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  getAssignedStudents(driver_id){
    return this.http.get(this.baseURi + '/driver/assignedstudents/'+driver_id, { headers: this.headers })
  }
}