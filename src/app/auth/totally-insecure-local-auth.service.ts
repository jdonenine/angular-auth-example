import { Injectable } from '@angular/core';
import {
    AuthBaseService,
    LOGIN_ERROR_INVALID_EMAIL,
    LOGIN_ERROR_INVALID_PASSWORD,
    LOGIN_ERROR_LOGIN_FAILED
} from 'app/auth/auth-base.service';
import { User } from 'app/user/user';
import { ValidationUtils } from 'app/utils/validation-utils';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class TotallyInsecureLocalAuthService extends AuthBaseService {
  protected doLoginWithEmailPassword(email: string, password: string): Observable<User> {
    return Observable.create((observer: Observer<User>) => {
      if (!ValidationUtils.validateEmail(email)) {
        observer.error(LOGIN_ERROR_INVALID_EMAIL);
        return;
      }
      if (!ValidationUtils.validatePassword(password)) {
        observer.error(LOGIN_ERROR_INVALID_PASSWORD);
        return;
      }
      let pass: boolean = false;
      switch (email.trim()) {
        case 'user@example.com': password === 'user123' ? pass = true : pass = false; break;
        default: pass = false; break;
      }
      if (pass) {
        observer.next(new User(email, this.generateToken(email)));
        observer.complete();
      } else {
        observer.error(LOGIN_ERROR_LOGIN_FAILED);
      }
    })
  }

  protected doLogout(): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      observer.next(true);
      observer.complete();
    })
  }

  private generateToken(email): string {
    return btoa(email.trim());
  }
}
