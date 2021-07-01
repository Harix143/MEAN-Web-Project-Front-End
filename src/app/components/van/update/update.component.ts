import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { VanServiceService } from '../van-service.service';
import { Van } from '../../../van';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public vans: Van = new Van
  constructor(private router: Router, private vanService: VanServiceService) { }

  ngOnInit(): void {
    this.vans = this.vanService.getter()!;
  }
  upDateVan(){
    this.vanService.updateVan(this.vans, this.vans._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/vans') 
      },error=>{
        console.log(error)
      }
    )
  }

}