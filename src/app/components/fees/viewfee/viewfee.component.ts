import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FeeServiceService } from '../fee-service.service';
import { Fee } from '../../../van';
@Component({
  selector: 'app-viewfee',
  templateUrl: './viewfee.component.html',
  styleUrls: ['./viewfee.component.scss']
})
export class ViewfeeComponent implements OnInit {

  public fees: Fee = new Fee
  constructor(private router: Router, public feeservice: FeeServiceService) { }
  ngOnInit(): void {
    this.fees = this.feeservice.getter()!;
  }

  viewFees(){
    this.router.navigateByUrl('/admin/fees') 
  }
  newFee(event:any){
    event.preventDefault()
    this.feeservice.setter(new Fee());
    this.router.navigateByUrl('/admin/fees/create')
  }

}
