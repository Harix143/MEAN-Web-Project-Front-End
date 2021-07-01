import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drv-default',
  templateUrl: './drv-default.component.html',
  styleUrls: ['./drv-default.component.scss']
})
export class DrvDefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
