import { Component, OnInit } from '@angular/core';
import { DrvServicesService } from '../drv-services.service';
import { Complaint } from '../../models/complaint.model';
import { UserServiceService } from 'src/app/Users/user-service.service';
@Component({
  selector: 'app-drv-dashboard',
  templateUrl: './drv-dashboard.component.html',
  styleUrls: ['./drv-dashboard.component.scss']
})
export class DrvDashboardComponent implements OnInit {

  public complaints: Complaint[];
  userDetails:any;
  _id:String;
  constructor(private drvService: DrvServicesService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.readComplaints(this._id)
  }
  readComplaints(id: String){this.drvService.readComplaint(id).subscribe((
    data:any[])=>{
      //  console.log(data);
      this.complaints = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}
}
