import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-driver',
  templateUrl: './user-driver.component.html',
  styleUrls: ['./user-driver.component.scss']
})
export class UserDriverComponent implements OnInit {

  constructor(private userService:UserServiceService, private router : Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
    if (this.userService.isLoggedIn()) {
      const payload = this.userService.getUserPayload();
      const loggedInUserRole = payload['role'];
      if (loggedInUserRole=="admin") {
        this.router.navigateByUrl('admin/dashboard');
      }
      else if (loggedInUserRole=="driver") {
        this.router.navigateByUrl('driver/dashboard');
      }
      else if (loggedInUserRole=="student") {
        this.router.navigateByUrl('student/dashboard');
      }
      else if (loggedInUserRole=="parent") {
        this.router.navigateByUrl('parent/dashboard');
      }
    }
  }

}