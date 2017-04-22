import { ROUTE_DEFAULT, ROUTE_LOGIN } from '../app-routing.module';
import { REDIRECT_KEY } from './auth-base.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthBaseService } from 'app/auth/auth-base.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

  constructor(private auth: AuthBaseService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn()) {
      const redirect: string = localStorage.getItem(REDIRECT_KEY);
      if (redirect && redirect.length > 0) {
        localStorage.removeItem(REDIRECT_KEY);
        this.router.navigateByUrl(redirect);
        return false;
      } else {
        if (state.url === ROUTE_LOGIN) {
          this.router.navigate([ROUTE_DEFAULT]);
          return false;
        } else {
          return true;
        }
      }
    } else {
      if (state.url === ROUTE_LOGIN) {
        return true;
      } else {
        localStorage.setItem(REDIRECT_KEY, state.url);
        this.router.navigate([ROUTE_LOGIN]);
        return false;
      }
    }
  }
}
