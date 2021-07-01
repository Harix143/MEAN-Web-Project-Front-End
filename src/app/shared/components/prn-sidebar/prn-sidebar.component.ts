import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-prn-sidebar',
  templateUrl: './prn-sidebar.component.html',
  styleUrls: ['./prn-sidebar.component.scss']
})
export class PrnSidebarComponent implements OnInit {

  userDetails:any;
  name:String;
  email:String;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserPayload()
    this.email = this.userDetails['email'];
    this.name = this.userDetails['fullname'];
  }
  removeClass(event: any) {

    var element = document.getElementById("dashboard");
    element.classList.remove("list-item-active");

  }

  addClass(event: any) {

    var element = document.getElementById("dashboard");
    element.classList.add("list-item-active");
    
  }
}
