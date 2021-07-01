import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StdcompServiceService } from '../stdcomp-service.service';
import { Complaint } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-createstdcomp',
  templateUrl: './createstdcomp.component.html',
  styleUrls: ['./createstdcomp.component.scss']
})
export class CreatestdcompComponent implements OnInit {

  public complaints: Complaint = new Complaint
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Complaintrservice: StdcompServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
  }


  newComplaint(event:any){
    event.preventDefault()
    this.Complaintrservice.setter(new Complaint());
    this.router.navigateByUrl('/student/complaint/create')
  }

  createComplaint(){
    this.Complaintrservice.createComplaint(this.complaints,this._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/student/complaint')
      },error=>{
        console.log(error)
      }
    )
  }

}
