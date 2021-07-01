import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { VanServiceService } from '../van-service.service';
import { Van } from '../../../van';
@Component({
  selector: 'app-viewvan',
  templateUrl: './viewvan.component.html',
  styleUrls: ['./viewvan.component.scss']
})
export class ViewvanComponent implements OnInit {
  public vans: Van = new Van
  constructor(private router: Router, private vanService: VanServiceService) { }

  ngOnInit(): void {
    this.vans = this.vanService.getter()!;
  }

  viewVan(){
    this.router.navigateByUrl('/admin/vans') 
  }

}
