import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectsModule } from './projects/projects.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import {RfqsModule} from './rfqs/rfqs.module';
import {QuotesModule} from './quotes/quotes.module';
import {FinanceModule} from './finance/finance.module';
import {ReportsModule} from './reports/reports.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ClientTemplateComponent } from './client-template/client-template.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientDashboardComponent,
    PageNotFoundComponent,
    BaseTemplateComponent,
    AdminTemplateComponent,
    ClientTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RfqsModule,
    FinanceModule,
    ReportsModule,
    AppRoutingModule,
  ],
//   exports: [
// BaseTemplateComponent
//   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
