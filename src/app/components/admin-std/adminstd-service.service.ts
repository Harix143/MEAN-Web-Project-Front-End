import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../../van';
@Injectable({
  providedIn: 'root'
})
export class AdminstdServiceService {
  public students: Student = new Student;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createStudent(students:Student){
    return this.http.post(this.baseURi+'/admin/addstudent', students,{headers:this.headers} )
  }

  readStudent(){
    return this.http.get(this.baseURi+'/admin/students',{headers:this.headers} )
  }

  readSpecificStudent(id:String){
    return this.http.get(this.baseURi+'/admin/students'+id,{headers:this.headers} )
  }

  updatestudents(students:Student,id:String){
    return this.http.patch(this.baseURi+'/admin/updatestudent/' +id, students,{headers:this.headers} )
  }

  deletestudents(id:String){
    return this.http.delete(this.baseURi+'/admin/deletestudent/'+id,{headers:this.headers} )
  }

  setter(student:Student){
    this.students = student;
  }
  getter(){
    return this.students;
  }
}
