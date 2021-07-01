import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { VanServiceService } from '../van-service.service';
import { Van } from '../../../van';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public vans: Van = new Van
  constructor(private router: Router, private vanService: VanServiceService) { }

  ngOnInit(): void {
    this.vans = this.vanService.getter()!;
  }
  createVan(){
    this.vanService.createVan(this.vans).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/vans')
      },error=>{
        console.log(error)
      }
    )
  }

}
