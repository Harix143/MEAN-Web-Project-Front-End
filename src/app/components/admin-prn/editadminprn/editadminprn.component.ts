import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminprnServiceService } from '../adminprn-service.service';
import { Parent } from '../../../van';
@Component({
  selector: 'app-editadminprn',
  templateUrl: './editadminprn.component.html',
  styleUrls: ['./editadminprn.component.scss']
})
export class EditadminprnComponent implements OnInit {

  public parents: Parent = new Parent
  constructor(private router: Router, public parentService: AdminprnServiceService) { }
  ngOnInit(): void {
    this.parents = this.parentService.getter()!;  }


  newParent(event:any){
    event.preventDefault()
    this.parentService.setter(new Parent());
    this.router.navigateByUrl('/admin/parents/create')
  }


  updateParent(){
    this.parentService.updateParent(this.parents, this.parents._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/parents')
      },error=>{
        console.log(error)
      }
    )
  }


}
