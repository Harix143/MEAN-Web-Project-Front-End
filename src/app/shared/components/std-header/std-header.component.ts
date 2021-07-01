import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Users/user-service.service';

@Component({
  selector: 'app-std-header',
  templateUrl: './std-header.component.html',
  styleUrls: ['./std-header.component.scss']
})
export class StdHeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserServiceService, private router : Router) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  signOut(){
    this.userService.deleteToken();
    this.router.navigateByUrl('');
  }
  
}