import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminstdServiceService } from '../adminstd-service.service';
import { Student } from '../../../van';
@Component({
  selector: 'app-createadminstd',
  templateUrl: './createadminstd.component.html',
  styleUrls: ['./createadminstd.component.scss']
})
export class CreateadminstdComponent implements OnInit {

  public students: Student = new Student
  constructor(private router: Router, public studentrservice: AdminstdServiceService) { }
  ngOnInit(): void {
    this.students = this.studentrservice.getter()!;  }


  newStudent(event:any){
    event.preventDefault()
    this.studentrservice.setter(new Student());
    this.router.navigateByUrl('/admin/students/create')
  }


  createStudent(){
    this.studentrservice.createStudent(this.students).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/students')
      },error=>{
        console.log(error)
      }
    )
  }

}
