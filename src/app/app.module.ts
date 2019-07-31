import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'my-moto-track'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule, SharedModule,
    AppRoutingModule,HttpClientModule,
    InputTextModule,ButtonModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
