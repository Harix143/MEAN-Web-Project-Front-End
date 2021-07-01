import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-default',
  templateUrl: './std-default.component.html',
  styleUrls: ['./std-default.component.scss']
})
export class StdDefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
