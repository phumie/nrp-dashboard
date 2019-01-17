import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';


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
  // {
  //   path: 'admin-template',
  //   component: AdminTemplateComponent
  // },
  // { path: 'quotes', loadChildren: './quotes/quotes.module#QuotesModule'},
  // {path: 'reports', loadChildren: './reports/reports.module#ReportsModule'},
  {
    path: 'feedback',
    loadChildren : './client-feedback/client-feedback.module#ClientFeedbackModule'
  },
  {
    path: 'client-projects',
    loadChildren : './client-projects/client-projects.module#ClientProjectsModule'
  },
  // {path: 'new-feedback', loadChildren : './new-feedback/new-feedback.module#NewFeedbackModule'},
  {path: 'client-dashboard', component: ClientDashboardComponent},
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
