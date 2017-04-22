import { CommonComponentsModule } from '../common/common-compnoents.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    CommonComponentsModule
  ],
  declarations: [LoginComponent, ProfileComponent]
})
export class UserModule { }
