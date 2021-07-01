import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-type-selection',
  templateUrl: './user-type-selection.component.html',
  styleUrls: ['./user-type-selection.component.scss']
})
export class UserTypeSelectionComponent implements OnInit {

  constructor(private userService : UserServiceService, private router: Router) { }

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
    }
  }
  
}