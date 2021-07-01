import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdmincomserviceService } from '../admincomservice.service';
import { Complaint } from '../../../van';
@Component({
  selector: 'app-admincomview',
  templateUrl: './admincomview.component.html',
  styleUrls: ['./admincomview.component.scss']
})
export class AdmincomviewComponent implements OnInit {

  public complaints: Complaint = new Complaint
  constructor(private router: Router, public complaintService: AdmincomserviceService) { }
  ngOnInit(): void {
    this.complaints = this.complaintService.getter()!; 
   }
   viewComplaint(){
    this.router.navigateByUrl('/admin/complaints') 
  }
}
