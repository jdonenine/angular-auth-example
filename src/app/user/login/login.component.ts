import { Component } from '@angular/core';
import { AuthBaseService } from 'app/auth/auth-base.service';
import { ValidationUtils } from 'app/utils/validation-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private static LOGIN_FAILED = 'Login failed, please try again.';

  email: string = null;
  password: string = null;
  inProgress = false;
  errorMsg: string = null;

  constructor(private auth: AuthBaseService) {}

  login(): void {
    this.errorMsg = null;
    this.inProgress = true;
    this.auth.login(this.email, this.password).take(1).subscribe(
      (data:boolean) => {
        this.inProgress = false;
        if (!data) {
          this.errorMsg = ''
        }
      },
      (error) => {
        this.errorMsg = 'Login failed, please try again.';
        this.inProgress = false;
      }
    );
  }

  canLogin(): boolean {
    return ValidationUtils.validateEmail(this.email) && ValidationUtils.validatePassword(this.password) && !this.inProgress;
  }
}
