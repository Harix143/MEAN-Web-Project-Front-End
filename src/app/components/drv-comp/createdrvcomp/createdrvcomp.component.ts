import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DrvcompServiceService } from '../drvcomp-service.service';
import { Complaint } from '../../../van';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-createdrvcomp',
  templateUrl: './createdrvcomp.component.html',
  styleUrls: ['./createdrvcomp.component.scss']
})
export class CreatedrvcompComponent implements OnInit {

  public complaints: Complaint = new Complaint
  userDetails:any;
  _id:String;
  constructor(private router: Router, public Complaintrservice: DrvcompServiceService, private userService:UserServiceService) { }
  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
  }


  newComplaint(event:any){
    event.preventDefault()
    this.Complaintrservice.setter(new Complaint());
    this.router.navigateByUrl('/driver/complaint/create')
  }

  createComplaint(){
    this.Complaintrservice.createComplaint(this.complaints,this._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/driver/complaint')
      },error=>{
        console.log(error)
      }
    )
  }

}
