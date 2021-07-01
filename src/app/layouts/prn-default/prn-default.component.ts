import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prn-default',
  templateUrl: './prn-default.component.html',
  styleUrls: ['./prn-default.component.scss']
})
export class PrnDefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
