import { Component, OnInit } from '@angular/core';
import { DriverServiceService } from '../driver-service.service';
import { Student } from 'src/app/models/users.model';
import { Driver } from 'src/app/van';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-assign-driver',
  templateUrl: './admin-assign-driver.component.html',
  styleUrls: ['./admin-assign-driver.component.scss']
})
export class AdminAssignDriverComponent implements OnInit {

  public students: Student[];
  public student :Student = new Student;
  public Driver: Driver = new Driver;
  constructor(private router: Router, private DriverService: DriverServiceService) { }

  ngOnInit(): void {
    this.Driver = this.DriverService.getter();
    this.getAvailableStudents();
    
  }
  assignDriver(student){
   
    this.assignDriverHelper(student._id, this.Driver._id);
  }
  assignDriverHelper(studentID, DriverId){
    this.DriverService.assignDriver(studentID, DriverId).subscribe(
      data=>{
        alert('Student has been Assigned to Driver');
        this.router.navigateByUrl('/admin/drivers');
      },error=>{
        console.log(error)
      }
    )
  }

  getAvailableStudents(){
    this.DriverService.readAvailableStudents().subscribe((data:any[])=>{
      this.students=data['results'];
    },
    error=>{
      console.log(error);
    }
    )
  }

  newDriver(event:any){
    event.preventDefault()
    this.DriverService.setter(new Driver());
    this.router.navigateByUrl('/admin/drivers/create')
  }

}
