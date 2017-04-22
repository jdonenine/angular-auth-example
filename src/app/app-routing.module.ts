import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from 'app/auth/is-logged-in.guard';

export const ROUTE_LOGIN = '/user/login';
export const ROUTE_DEFAULT = '/home';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: ROUTE_DEFAULT,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ROUTE_DEFAULT,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
