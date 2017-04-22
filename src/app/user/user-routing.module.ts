import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/user/login/login.component";
import { IsLoggedInGuard } from "app/auth/is-logged-in.guard";

export const LOGIN_ROUTE = '/login';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [IsLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
