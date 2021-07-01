import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DriverServiceService } from '../driver-service.service';
import { Driver } from '../../../van';
@Component({
  selector: 'app-viewdriver',
  templateUrl: './viewdriver.component.html',
  styleUrls: ['./viewdriver.component.scss']
})
export class ViewdriverComponent implements OnInit {

  public drivers: Driver = new Driver
  constructor(private router: Router, public driverService: DriverServiceService) { }
  ngOnInit(): void {
    this.drivers = this.driverService.getter()!;  }


  newDriver(event:any){
    event.preventDefault()
    this.driverService.setter(new Driver());
    this.router.navigateByUrl('/admin/drivers/create')
  }


  viewDriver(){
    this.router.navigateByUrl('/admin/drivers') 
  }
}
