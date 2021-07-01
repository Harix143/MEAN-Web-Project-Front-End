import { Component, OnInit, ViewChild } from '@angular/core';
import { StdServicesService } from '../std-services.service';
import { Complaint } from '../../models/complaint.model';
import { UserServiceService } from 'src/app/Users/user-service.service';
@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
  public complaints: Complaint[];
  userDetails:any;
  _id:String;
  constructor(private stdService: StdServicesService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this._id = this.userDetails['_id'];
    this.readComplaints(this._id)
  }
  readComplaints(id: String) {
    this.stdService.readComplaint(id).subscribe((data: any[]) => {
      this.complaints = data['results'];
    }), error => {
      console.log(error);
    }
  }
}
