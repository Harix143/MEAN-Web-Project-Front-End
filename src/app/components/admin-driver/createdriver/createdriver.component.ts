import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DriverServiceService } from '../driver-service.service';
import { Driver } from '../../../van';
@Component({
  selector: 'app-createdriver',
  templateUrl: './createdriver.component.html',
  styleUrls: ['./createdriver.component.scss']
})
export class CreatedriverComponent implements OnInit {

  public drivers: Driver = new Driver
  constructor(private router: Router, public driverService: DriverServiceService) { }
  ngOnInit(): void {
    this.drivers = this.driverService.getter()!;  }


  newDriver(event:any){
    event.preventDefault()
    this.driverService.setter(new Driver());
    this.router.navigateByUrl('/admin/drivers/create')
  }


  createDriver(){
    this.driverService.createDriver(this.drivers).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/drivers')
      },error=>{
        console.log(error)
      }
    )
  }

}
