import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminstdServiceService } from '../adminstd-service.service';
import { Student } from '../../../van';
@Component({
  selector: 'app-listadminstd',
  templateUrl: './listadminstd.component.html',
  styleUrls: ['./listadminstd.component.scss']
})
export class ListadminstdComponent implements OnInit {

  public students: Student[]
  constructor(private router: Router, public studentrservice: AdminstdServiceService) { }
  ngOnInit(): void {
    this.readStudents()
  }


  newStudent(event:any){
    event.preventDefault()
    this.studentrservice.setter(new Student());
    this.router.navigateByUrl('/admin/students/create')
  }

  readStudents(){this.studentrservice.readStudent().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.students = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(student: Student){
    this.studentrservice.deletestudents(student._id).subscribe(
      data=>{
        alert("Student Data Deleted Successfully!")
     this.students!.splice(this.students!.indexOf(student),1)
      },error=>{
        console.log(error)
      }
  
    )

  }
  doUpdate(student){
    this.studentrservice.setter(student)
    this.router.navigateByUrl('admin/students/update')

  }


  doView(student){
    this.studentrservice.setter(student)
    this.router.navigateByUrl('admin/students/specific')
  }


}
