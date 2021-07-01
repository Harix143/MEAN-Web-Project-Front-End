import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FeeServiceService } from '../fee-service.service';
import { Fee } from '../../../van';
@Component({
  selector: 'app-updatefee',
  templateUrl: './updatefee.component.html',
  styleUrls: ['./updatefee.component.scss']
})
export class UpdatefeeComponent implements OnInit {

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

  updateFee(){
    this.feeservice.updateFee(this.fees, this.fees._id).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/admin/fees') 
      },error=>{
        console.log(error)
      }
    )
  }

}
