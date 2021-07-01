import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-student',
  templateUrl: './user-student.component.html',
  styleUrls: ['./user-student.component.scss']
})
export class UserStudentComponent implements OnInit {

  constructor(private userService: UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
    if (this.userService.isLoggedIn()) {
      const payload = this.userService.getUserPayload();
      const loggedInUserRole = payload['role'];
      console.log(loggedInUserRole);
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