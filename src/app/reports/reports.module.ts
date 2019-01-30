import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { FinancialReportsComponent } from './financial-reports/financial-reports.component';
import { SiteReportsComponent } from './site-reports/site-reports.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { WeeklyReportsComponent } from './weekly-reports/weekly-reports.component';
import { FleetReportsComponent } from './fleet-reports/fleet-reports.component';
import { FuelReportsComponent } from './fuel-reports/fuel-reports.component';
import { ProjectFeedbackComponent } from './project-feedback/project-feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewReportComponent } from './project-reports/view-report/view-report.component';

@NgModule({
  declarations: [
    ReportsComponent,
    ProjectReportsComponent,
    FinancialReportsComponent,
    SiteReportsComponent,
    DailyReportsComponent,
    WeeklyReportsComponent,
    FleetReportsComponent,
    FuelReportsComponent,
    ProjectFeedbackComponent,
    ViewFeedbackComponent,
    ViewReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
