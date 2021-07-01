import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DriverServiceService } from '../driver-service.service';
import { Driver } from '../../../van';
@Component({
  selector: 'app-editdriver',
  templateUrl: './editdriver.component.html',
  styleUrls: ['./editdriver.component.scss']
})
export class EditdriverComponent implements OnInit {

  public drivers: Driver = new Driver
  constructor(private router: Router, public driverService: DriverServiceService) { }
  ngOnInit(): void {
    this.drivers = this.driverService.getter()!;  }


  newDriver(event:any){
    event.preventDefault()
    this.driverService.setter(new Driver());
    this.router.navigateByUrl('/admin/drivers/create')
  }


  updateDriver(){
    this.driverService.updateDriver(this.drivers, this.drivers._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/drivers')
      },error=>{
        console.log(error)
      }
    )
  }

}
