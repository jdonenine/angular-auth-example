import { AuthBaseService } from '../../auth/auth-base.service';
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth: AuthBaseService) { }

  logout() {
    this.auth.logout();
  }

  get userEmail() {
    return this.auth.getCurrentUser().email;
  }

}
