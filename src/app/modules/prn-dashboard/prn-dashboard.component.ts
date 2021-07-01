import { Component, OnInit } from '@angular/core';
import { PrnServicesService } from '../prn-services.service';
import { Complaint } from '../../models/complaint.model';
import { UserServiceService } from 'src/app/Users/user-service.service';
@Component({
  selector: 'app-prn-dashboard',
  templateUrl: './prn-dashboard.component.html',
  styleUrls: ['./prn-dashboard.component.scss']
})
export class PrnDashboardComponent implements OnInit {

  public complaints: Complaint[]
  userDetails:any;
  _id:String;
  constructor(private prnService: PrnServicesService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.readComplaints(this._id)
  }
  readComplaints(id: String){this.prnService.readComplaint(id).subscribe((
    data:any[])=>{
      //  console.log(data);
      this.complaints = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

}
