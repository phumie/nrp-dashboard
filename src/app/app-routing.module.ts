import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SiteLoginComponent } from './site-login/site-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin/admin.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'site-login',
    component: SiteLoginComponent
  },
  {
    path: 'forgot-password',
    component: ChangePasswordComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren : './admin/admin.module#AdminModule'
  },
  {
    path: 'projects',
    canLoad: [AuthGuard],
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'rfqs',
    canLoad: [AuthGuard],
    loadChildren: './rfqs/rfqs.module#RfqsModule'
  },
  {
    path: 'finance',
    canLoad: [AuthGuard],
    loadChildren: './finance/finance.module#FinanceModule'
  },
  {
    path: 'quotes',
    loadChildren: './quotes/quotes.module#QuotesModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  },
  {
    path: 'feedback',
    loadChildren : './client-feedback/client-feedback.module#ClientFeedbackModule'
  },
  {
    path: 'client-projects',
    loadChildren : './client-projects/client-projects.module#ClientProjectsModule'
  },
  {
    path: 'client-dashboard',
    component: ClientDashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
