import { Component, OnInit } from '@angular/core';
import { Van } from 'src/app/van';
import { VanServiceService } from '../van-service.service';


@Component({
  selector: 'app-view-air-cond-vans',
  templateUrl: './view-air-cond-vans.component.html',
  styleUrls: ['./view-air-cond-vans.component.scss']
})
export class ViewAirCondVansComponent implements OnInit {
  airCondVans: Van[];
  constructor(private vanService: VanServiceService) { }

  ngOnInit(): void {
    this.readAirCondVans();
  }

  readAirCondVans(){
    this.vanService.readAirCondVans().subscribe((data:any[])=>{
      this.airCondVans = data['results'];
      console.log(this.airCondVans);
    },error=>{
      console.log(error);
    }
    )
  }

}