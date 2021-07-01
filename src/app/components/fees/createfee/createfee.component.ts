import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FeeServiceService } from '../fee-service.service';
import { Fee } from '../../../van';
@Component({
  selector: 'app-createfee',
  templateUrl: './createfee.component.html',
  styleUrls: ['./createfee.component.scss']
})
export class CreatefeeComponent implements OnInit {

  public fees: Fee = new Fee
  constructor(private router: Router, public feeservice: FeeServiceService) { }
  ngOnInit(): void {
    this.fees = this.feeservice.getter()!;
  }


  newFee(event:any){
    event.preventDefault()
    this.feeservice.setter(new Fee());
    this.router.navigateByUrl('/admin/fees/create')
  }

  createChallan(){
    this.feeservice.createFee(this.fees).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/fees')
      },error=>{
        console.log(error)
      }
    )
  }

}
