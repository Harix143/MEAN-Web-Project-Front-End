import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { VanServiceService } from '../van-service.service';
import { Van } from '../../../van';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private vanService: VanServiceService) { }

  ngOnInit(): void {
  }

  newVan(event:any){
    event.preventDefault()
    this.vanService.setter(new Van());
    this.router.navigateByUrl('/admin/vans/create')
  }
}
