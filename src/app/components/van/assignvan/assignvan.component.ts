import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { VanServiceService } from '../van-service.service';
import { Driver } from 'src/app/models/users.model';
import { Van } from 'src/app/van';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
@Component({
  selector: 'app-assignvan',
  templateUrl: './assignvan.component.html',
  styleUrls: ['./assignvan.component.scss']
})
export class AssignvanComponent implements OnInit {

  public drivers: Driver[];
  public driver :Driver = new Driver;
  public van: Van = new Van;
  constructor(private router: Router, private vanService: VanServiceService) { }

  ngOnInit(): void {
    this.van = this.vanService.getter();
    this.getAvailableDrivers();
    
  }
  assignVan(driver){
   
    this.assignVanHelper(driver._id, this.van._id);
  }
  assignVanHelper(driverID, vanId){
    this.vanService.assignVan(driverID, vanId).subscribe(
      data=>{
        alert('Van has been Assigned to Driver');
        this.router.navigateByUrl('/admin/vans');
      },error=>{
        console.log(error)
      }
    )
  }

  getAvailableDrivers(){
    this.vanService.readAvailableDrivers().subscribe((data:any[])=>{
      this.drivers=data['results'];
    },
    error=>{
      console.log(error);
    }
    )
  }

}