import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/users.model';
import { UserServiceService } from 'src/app/Users/user-service.service';
import { ViewAssignedStdService } from '../view-assigned-std.service';

@Component({
  selector: 'app-view-assigned-std',
  templateUrl: './view-assigned-std.component.html',
  styleUrls: ['./view-assigned-std.component.scss']
})
export class ViewAssignedStdComponent implements OnInit {

  students: Student[];
  userDetails : any;
  serverErrorMessages: any;

  constructor(private viewAssgnStudents : ViewAssignedStdService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload();
    console.log(this.userDetails);
    console.log(this.userDetails['_id']);
    this.getAssignedStudents(this.userDetails['_id']);
  }
  getAssignedStudents(drvId){
      this.viewAssgnStudents.getAssignedStudents(drvId).subscribe((data:any[])=>{
      this.students = data['students'];
      console.log(this.students);
    },
    error=>{
      this.serverErrorMessages =error.error.message;
      console.log(error);
    });
  }
}