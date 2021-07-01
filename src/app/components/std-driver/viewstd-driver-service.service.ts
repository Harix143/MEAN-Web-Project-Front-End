import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewstdDriverServiceService {

  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  getAssignedDriver(student_id){
    return this.http.get(this.baseURi + '/student/assigneddriver/'+student_id, { headers: this.headers })
  }
}