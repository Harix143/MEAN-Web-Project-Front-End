import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdmincomserviceService } from '../admincomservice.service';
import { Complaint } from '../../../van';
@Component({
  selector: 'app-admincomedit',
  templateUrl: './admincomedit.component.html',
  styleUrls: ['./admincomedit.component.scss']
})
export class AdmincomeditComponent implements OnInit {

  public complaints: Complaint = new Complaint
  constructor(private router: Router, public complaintService: AdmincomserviceService) { }
  ngOnInit(): void {
    this.complaints = this.complaintService.getter()!; 
   }


  updateComplaint(){
    this.complaintService.updateComplaint(this.complaints, this.complaints._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/complaints')
      },error=>{
        console.log(error)
      }
    )
  }


}
