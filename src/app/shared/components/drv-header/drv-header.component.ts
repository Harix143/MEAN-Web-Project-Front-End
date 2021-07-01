import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from 'src/app/Users/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drv-header',
  templateUrl: './drv-header.component.html',
  styleUrls: ['./drv-header.component.scss']
})
export class DrvHeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserServiceService, private router: Router) { }

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