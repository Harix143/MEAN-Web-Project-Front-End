import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminprnServiceService } from '../adminprn-service.service';
import { Parent } from '../../../van';
@Component({
  selector: 'app-listadminprn',
  templateUrl: './listadminprn.component.html',
  styleUrls: ['./listadminprn.component.scss']
})
export class ListadminprnComponent implements OnInit {

  public parents: Parent[]
  constructor(private router: Router, public parentservice: AdminprnServiceService) { }
  ngOnInit(): void {
    this.readParents()
  }


  newParent(event:any){
    event.preventDefault()
    this.parentservice.setter(new Parent());
    this.router.navigateByUrl('/admin/parents/create')
  }

  readParents(){this.parentservice.readParent().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.parents = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(parent: Parent){
    this.parentservice.deleteParent(parent._id).subscribe(
      data=>{
        alert("Parent Data Deleted Successfully!")
     this.parents!.splice(this.parents!.indexOf(parent),1)
      },error=>{
        console.log(error)
      }
  
    )

  }
  doUpdate(parent){
    this.parentservice.setter(parent)
    this.router.navigateByUrl('admin/parents/update')

  }

  doView(parent){
    this.parentservice.setter(parent)
    this.router.navigateByUrl('admin/parents/specific')
  }
}
