import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Complaint } from '../../models/complaint.model';
import { Driver, Student } from 'src/app/models/users.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public students : Student[];
  public drivers : Driver[];
  public complaints: Complaint[];
  cards = [] as any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.readRecentStudents()
    // this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.readComplaints();
    this.readRecentDrivers();
  
  }

  readComplaints() {
    this.dashboardService.readComplaints().subscribe((data: any[]) => {
      this.complaints = data['results'];
    }), error => {
      console.log(error);
    }
  }

  readRecentStudents(){
    this.dashboardService.readRecentStudents().subscribe((data: any)=>{
      this.students = data['results'];
    },error => {
      console.log(error);
    });
  }
  readRecentDrivers(){
    this.dashboardService.readRecentDrivers().subscribe((data: any)=>{
      this.drivers = data['results'];
    },error => {
      console.log(error);
    });
  }
}