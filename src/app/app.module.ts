import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthBaseService } from 'app/auth/auth-base.service';
import { IsLoggedInGuard } from 'app/auth/is-logged-in.guard';
import { TotallyInsecureLocalAuthService } from 'app/auth/totally-insecure-local-auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {provide: AuthBaseService, useClass: TotallyInsecureLocalAuthService},
    IsLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
