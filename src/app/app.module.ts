import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BeerComponent } from './beer/beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    LoginComponent,
    RegisterComponent,
    BeerListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
