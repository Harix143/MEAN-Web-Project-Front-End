import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminprnServiceService } from '../adminprn-service.service';
import { Parent } from '../../../van';
@Component({
  selector: 'app-createadminprn',
  templateUrl: './createadminprn.component.html',
  styleUrls: ['./createadminprn.component.scss']
})
export class CreateadminprnComponent implements OnInit {

  public parents: Parent = new Parent
  constructor(private router: Router, public parentService: AdminprnServiceService) { }
  ngOnInit(): void {
    this.parents = this.parentService.getter()!;  }


  newParent(event:any){
    event.preventDefault()
    this.parentService.setter(new Parent());
    this.router.navigateByUrl('/admin/parents/create')
  }


  createParent(){
    this.parentService.createParent(this.parents).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/parents')
      },error=>{
        console.log(error)
      }
    )
  }


}
