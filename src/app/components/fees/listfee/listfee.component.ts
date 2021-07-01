import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FeeServiceService } from '../fee-service.service';
import { Fee } from '../../../van';
@Component({
  selector: 'app-listfee',
  templateUrl: './listfee.component.html',
  styleUrls: ['./listfee.component.scss']
})
export class ListfeeComponent implements OnInit {

  public fees: Fee[]
  constructor(private router: Router, public feeservice: FeeServiceService) { }
  ngOnInit(): void {
    this.readFees()
  }


  newFee(event:any){
    event.preventDefault()
    this.feeservice.setter(new Fee());
    this.router.navigateByUrl('/admin/fees/create')
  }

  readFees(){this.feeservice.readFee().subscribe((
    data:any[])=>{
      //  console.log(data);
      this.fees = data['results']; 
     
    },error=>{
      console.log(error)
    }

  )}

  doDelete(fee: Fee){
    this.feeservice.deleteFee(fee._id).subscribe(
      data=>{
        alert("Challan Form Deleted Successfully!")
     this.fees!.splice(this.fees!.indexOf(fee),1)
      },error=>{
        console.log(error)
      }
  
    )

  }
  doUpdate(fee){
    this.feeservice.setter(fee)
    this.router.navigateByUrl('admin/fees/update')

  }


  doView(fee){
    this.feeservice.setter(fee)
    this.router.navigateByUrl('admin/fees/specific')
  }
}
