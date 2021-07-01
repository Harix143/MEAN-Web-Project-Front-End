import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminstdServiceService } from '../adminstd-service.service';
import { Student } from '../../../van';
@Component({
  selector: 'app-viewadminstd',
  templateUrl: './viewadminstd.component.html',
  styleUrls: ['./viewadminstd.component.scss']
})
export class ViewadminstdComponent implements OnInit {

  public students: Student = new Student
  constructor(private router: Router, public studentrservice: AdminstdServiceService) { }
  ngOnInit(): void {
    this.students = this.studentrservice.getter()!;  }


  newStudent(event:any){
    event.preventDefault()
    this.studentrservice.setter(new Student());
    this.router.navigateByUrl('/admin/students/create')
  }


  viewStudent(){
    this.router.navigateByUrl('/admin/students') 
  }

}
