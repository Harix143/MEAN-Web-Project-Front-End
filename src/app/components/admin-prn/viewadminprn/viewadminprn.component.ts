import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminprnServiceService } from '../adminprn-service.service';
import { Parent } from '../../../van';
@Component({
  selector: 'app-viewadminprn',
  templateUrl: './viewadminprn.component.html',
  styleUrls: ['./viewadminprn.component.scss']
})
export class ViewadminprnComponent implements OnInit {

  public parents: Parent = new Parent
  constructor(private router: Router, public parentService: AdminprnServiceService) { }
  ngOnInit(): void {
    this.parents = this.parentService.getter()!;  }


  newParent(event:any){
    event.preventDefault()
    this.parentService.setter(new Parent());
    this.router.navigateByUrl('/admin/parents/create')
  }


  viewParent(){
    this.router.navigateByUrl('/admin/parents') 

  }

}
