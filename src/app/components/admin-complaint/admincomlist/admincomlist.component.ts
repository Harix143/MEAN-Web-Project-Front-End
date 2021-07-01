import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdmincomserviceService } from '../admincomservice.service';
import { Complaint } from '../../../van';

@Component({
  selector: 'app-admincomlist',
  templateUrl: './admincomlist.component.html',
  styleUrls: ['./admincomlist.component.scss']
})
export class AdmincomlistComponent implements OnInit {

  public complaints: Complaint[]
  constructor(private router: Router, public Complaintservice: AdmincomserviceService) { }
  ngOnInit(): void {
    this.readComplaints()
  }


  readComplaints()
  {
    this.Complaintservice.readComplaint().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.complaints = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doUpdate(Complaint){
    this.Complaintservice.setter(Complaint)
    this.router.navigateByUrl('admin/complaints/update')
  }


  doView(Complaint){
    this.Complaintservice.setter(Complaint)
    this.router.navigateByUrl('admin/complaints/specific')
  }

}
