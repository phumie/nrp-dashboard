import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  // {path: 'base-template', component: BaseTemplateComponent},
  {path: 'admin-template', component: AdminTemplateComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
  { path: 'quotes', loadChildren: './quotes/quotes.module#QuotesModule'},
  {path: 'admin', loadChildren : './admin/admin.module#AdminModule'},
  {path: 'reports', loadChildren: './reports/reports.module#ReportsModule'},
  {path: 'finance', loadChildren: './finance/finance.module#FinanceModule'},
  {path: 'feedback', loadChildren : './client-feedback/client-feedback.module#ClientFeedbackModule'},
  {path: 'client-projects', loadChildren : './client-projects/client-projects.module#ClientProjectsModule'},  
  // {path: 'new-feedback', loadChildren : './new-feedback/new-feedback.module#NewFeedbackModule'},    
  {path: 'client-dashboard', component: ClientDashboardComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
