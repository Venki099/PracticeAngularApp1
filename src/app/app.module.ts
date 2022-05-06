import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Formdemo1Component } from './formdemo1/formdemo1.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    FormdemoComponent,
    Formdemo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
