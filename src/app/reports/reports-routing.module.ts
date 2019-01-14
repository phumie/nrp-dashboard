import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports/reports.component';

import { FinancialReportsComponent } from './financial-reports/financial-reports.component';
import { SiteReportsComponent } from './site-reports/site-reports.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { WeeklyReportsComponent } from './weekly-reports/weekly-reports.component';
import { FleetReportsComponent } from './fleet-reports/fleet-reports.component';
import { FuelReportsComponent } from './fuel-reports/fuel-reports.component';
import { ProjectFeedbackComponent } from './project-feedback/project-feedback.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';

const routes: Routes = [
  {path: '', component: ReportsComponent}

  {
    path: '',
    children: [
      {
        path: '',
        component: ReportsComponent
      },
      {
        path: 'project-reports',
        children: [
          {
            path: 'project-feedback',
            children: [
              { path: ':id', component: ProjectFeedbackComponent },
              { path: '', component: ProjectFeedbackComponent }
            ]
          },
          { path: '', component: ProjectReportsComponent }
        ]
      },
      {
        path: 'financial-reports',
        children: [
          {
            path: 'project-feedback',
            children: [
              { path: ':id', component: ProjectFeedbackComponent },
              { path: '', component: ProjectFeedbackComponent }
            ]
          },
          { path: '', component: ProjectFeedbackComponent }
        ]
      },
      // {
      //   path: 'clients',
      //   children: [
      //     { path: 'edit', component: ManageClientsComponent },
      //     { path: 'client-list', component: ClientListComponent },
      //     { path: '', component: ClientListComponent }
      //   ]
      // },
      // {
      //   path: 'suppliers',
      //   children: [
      //     { path: 'edit', component: ManageSuppliersComponent },
      //     { path: 'supplier-list', component: SupplierListComponent },
      //     { path: '', component: SupplierListComponent }
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
