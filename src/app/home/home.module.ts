import { CommonComponentsModule } from '../common/common-compnoents.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
