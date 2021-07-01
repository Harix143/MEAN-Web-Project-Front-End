import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Users/user-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserServiceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isLoggedIn()) {
      const payload = this.userService.getUserPayload();
      const loggedInUserRole = payload['role'];
      console.log(loggedInUserRole);
      if (route.data.role && route.data.role.indexOf(loggedInUserRole) === -1) {
        this.router.navigateByUrl('');
        this.userService.deleteToken();
        return false;
      }
      return true;
    }
    this.router.navigateByUrl('');
    this.userService.deleteToken();
    return false;
  }

}