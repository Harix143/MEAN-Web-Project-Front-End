import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent-sign-in',
  templateUrl: './parent-sign-in.component.html',
  styleUrls: ['./parent-sign-in.component.scss']
})
export class ParentSignInComponent implements OnInit {

  constructor(private userService : UserServiceService, private router :Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/parent/dashboard');
     },
     err => {
       this.serverErrorMessages = err.error.message;
     }
    );
  }

}