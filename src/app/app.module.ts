import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ClientTemplateComponent } from './client-template/client-template.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientDashboardComponent,
    PageNotFoundComponent,
    BaseTemplateComponent,
    AdminTemplateComponent,
    ClientTemplateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
