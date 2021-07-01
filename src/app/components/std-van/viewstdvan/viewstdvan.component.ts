import { Component, OnInit } from '@angular/core';
import { Van } from 'src/app/van';
import { ViewstdvanserviceService } from '../viewstdvanservice.service';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-viewstdvan',
  templateUrl: './viewstdvan.component.html',
  styleUrls: ['./viewstdvan.component.scss']
})
export class ViewstdvanComponent implements OnInit {
 van : Van;
 airCond : String;
 userDetails: any;
 userId : any;

  constructor(private viewVanService : ViewstdvanserviceService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload();
    this.getAssignedVan(this.userDetails['_id']);
    
  }

  getAssignedVan(stdId){
    this.viewVanService.getAssignedVan(stdId).subscribe((data:any[])=>{
      this.van = data['van'];
      if(this.van.air_condition==true)
        this.airCond='Yes';
      else
        this.airCond='No';

      console.log(this.van);
    },
    error=>{
      console.log(error);
    }
    );
  }
}