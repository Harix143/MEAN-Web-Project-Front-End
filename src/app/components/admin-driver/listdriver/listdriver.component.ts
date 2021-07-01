import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DriverServiceService } from '../driver-service.service';
import { Driver } from '../../../van';
@Component({
  selector: 'app-listdriver',
  templateUrl: './listdriver.component.html',
  styleUrls: ['./listdriver.component.scss']
})
export class ListdriverComponent implements OnInit {

  public drivers: Driver[]
  constructor(private router: Router, public driverservice: DriverServiceService) { }
  ngOnInit(): void {
    this.readDrivers()
  }


  newDriver(event:any){
    event.preventDefault()
    this.driverservice.setter(new Driver());
    this.router.navigateByUrl('/admin/drivers/create')
  }

  readDrivers(){this.driverservice.readDriver().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.drivers = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(driver: Driver){
    this.driverservice.deleteDriver(driver._id).subscribe(
      data=>{
        alert("Driver Data Deleted Successfully!")
     this.drivers!.splice(this.drivers!.indexOf(driver),1)
      },error=>{
        console.log(error)
      }
  
    )

  }
  doUpdate(driver){
    this.driverservice.setter(driver)
    this.router.navigateByUrl('admin/drivers/update')

  }

  getAvailableStudents(driver){
    this.driverservice.setter(driver);
    this.router.navigateByUrl('admin/drivers/assign-driver') 
  }


  doView(driver){
    this.driverservice.setter(driver)
    this.router.navigateByUrl('admin/drivers/specific')
  }

}
