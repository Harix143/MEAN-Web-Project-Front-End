import { Component, OnInit } from '@angular/core';

import { VanServiceService } from '../van-service.service';
import { Van } from '../../../van';
import {Router} from '@angular/router'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public vans:Van[];
  public vanSpec: Van;
    constructor(public _vanService: VanServiceService, private router: Router,) { }

  ngOnInit(): void {
    this.readVans();
  }

  readVans(){this._vanService.readVan().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.vans = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(Van: Van){
    this._vanService.deleteVan(Van._id).subscribe(
      data=>{
        alert("Van Deleted Successfully!")
     this.vans!.splice(this.vans!.indexOf(Van),1)
      },error=>{
        console.log(error)
      }
  
    )

  }
  doUpdate(Van){
    this._vanService.setter(Van)
    this.router.navigateByUrl('admin/vans/update')

  }


  doView(Van){
    this._vanService.setter(Van)
    this.router.navigateByUrl('admin/vans/specific')
  }

  getAvailableDrivers(Van){

    this._vanService.setter(Van);
    this.router.navigateByUrl('admin/vans/assign-driver') 
  }


}