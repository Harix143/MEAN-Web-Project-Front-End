import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PrncompServiceService } from '../prncomp-service.service';
import { Complaint } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';
@Component({
  selector: 'app-listprncomp',
  templateUrl: './listprncomp.component.html',
  styleUrls: ['./listprncomp.component.scss']
})
export class ListprncompComponent implements OnInit {

  public complaints: Complaint[]
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Complaintrservice: PrncompServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.readComplaints(this._id)
  }


  newComplaint(event:any){
    event.preventDefault()
    this.Complaintrservice.setter(new Complaint());
    this.router.navigateByUrl('/parent/complaint/create')
  }

  readComplaints(id: String){this.Complaintrservice.readComplaint(id).subscribe((
    data:any[])=>{
      //  console.log(data);
      this.complaints = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(complaint: Complaint){
    this.Complaintrservice.deleteComplaints(this._id, complaint._id).subscribe(
      data=>{
        alert("Complaint Data Deleted Successfully!")
     this.complaints!.splice(this.complaints!.indexOf(complaint),1)
      },error=>{
        console.log(error)
      }
  
    )

  }


  doView(complaint){
    this.Complaintrservice.setter(complaint)
    this.router.navigateByUrl('parent/complaint/specific')
  }


}
