import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PrncompServiceService } from '../prncomp-service.service';
import { Complaint } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-viewprncomp',
  templateUrl: './viewprncomp.component.html',
  styleUrls: ['./viewprncomp.component.scss']
})
export class ViewprncompComponent implements OnInit {

  public complaints: Complaint = new Complaint
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Complaintrservice: PrncompServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.complaints = this.Complaintrservice.getter();
  }


  newComplaint(event:any){
    event.preventDefault()
    this.Complaintrservice.setter(new Complaint());
    this.router.navigateByUrl('/parent/complaint/create')
  }

  viewComplaint(){
   
    this.router.navigateByUrl('/parent/complaint')
    
    
  }

}
