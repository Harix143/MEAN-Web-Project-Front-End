import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PrncompServiceService } from '../prncomp-service.service';
import { Complaint } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-createprncomp',
  templateUrl: './createprncomp.component.html',
  styleUrls: ['./createprncomp.component.scss']
})
export class CreateprncompComponent implements OnInit {

  public complaints: Complaint = new Complaint
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Complaintrservice: PrncompServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
  }


  newComplaint(event:any){
    event.preventDefault()
    this.Complaintrservice.setter(new Complaint());
    this.router.navigateByUrl('/parent/complaint/create')
  }

  createComplaint(){
    this.Complaintrservice.createComplaint(this.complaints,this._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/parent/complaint')
      },error=>{
        console.log(error)
      }
    )
  }

}
