import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ROUTE_DEFAULT, ROUTE_LOGIN } from '../app-routing.module';
import { Router } from '@angular/router';
import { User } from 'app/user/user';
import { ValidationUtils } from 'app/utils/validation-utils';
import 'rxjs/add/operator/take';

export const USER_TOKEN_KEY = 'user_token';
export const USER_EMAIL_KEY = 'user_email';
export const REDIRECT_KEY = 'redirect';
export const LOGIN_ERROR_INVALID_EMAIL = 'INVALID_EMAIL';
export const LOGIN_ERROR_INVALID_PASSWORD = 'INVALID_PASSWORD';
export const LOGIN_ERROR_LOGIN_FAILED = 'LOGIN_FAILED';

@Injectable()
export abstract class AuthBaseService {
  constructor(private router: Router) { }
  
  protected abstract doLoginWithEmailPassword(email: string, password: string): Observable<User>;
  protected abstract doLogout(): Observable<boolean>;

  login(email: string, password: string): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
    this.doLoginWithEmailPassword(email, password)
      .take(1)
      .subscribe(
        (data: User) => {
          localStorage.setItem(USER_EMAIL_KEY, data.email);
          localStorage.setItem(USER_TOKEN_KEY, data.token);
          const redirect: string = localStorage.getItem(REDIRECT_KEY);
          if (redirect && redirect.length > 0) {
            localStorage.removeItem(REDIRECT_KEY);
            this.router.navigateByUrl(redirect);
          } else {
            this.router.navigate([ROUTE_DEFAULT]);
          }
          observer.next(true);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  logout(): void {
    this.doLogout()
      .take(1)
      .subscribe(
        data => {
          console.log('Logout success');
          console.log(data);
        },
        error => {
          console.log('Logout failure');
          console.log(error);
        },
        () => {
          localStorage.removeItem(USER_TOKEN_KEY);
          localStorage.removeItem(USER_EMAIL_KEY);
          this.router.navigate([ROUTE_LOGIN]);
        }
      );
  }

  isLoggedIn(): boolean {
    let user: User = this.getCurrentUser();
    if (!ValidationUtils.validateEmail(user.email))
      return false;
    if (!ValidationUtils.validateToken(user.token))
      return false;
    return true;
  }

  getCurrentUser(): User {
    const token: string = this.getCurrentUserToken();
    const email: string = this.getCurrentUserEmail();
    return new User(email, token);
  }

  private getCurrentUserToken(): string {
    return localStorage.getItem(USER_TOKEN_KEY);
  }

  private getCurrentUserEmail(): string {
    return localStorage.getItem(USER_EMAIL_KEY);
  }
}
