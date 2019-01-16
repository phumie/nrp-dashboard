import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ResourcesComponent } from './project-view/resources/resources.component';
import { DefaultsComponent } from './project-view/defaults/defaults.component';
import { FeedbackComponent } from './project-view/feedback/feedback.component';
import { BudgetComponent } from './project-view/budget/budget.component';
import { DurationComponent } from './project-view/duration/duration.component';
import { StatusComponent } from './project-view/status/status.component';
import { QuotesComponent } from './project-view/quotes/quotes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectViewComponent,
    NewProjectComponent,
    ResourcesComponent,
    DefaultsComponent,
    FeedbackComponent,
    BudgetComponent,
    DurationComponent,
    StatusComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ProjectsRoutingModule
  ],
  exports: []
})
export class ProjectsModule { }
