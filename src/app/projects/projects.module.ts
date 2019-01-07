import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NewProjectComponent } from './new-project/new-project.component';
// import { BaseTemplateComponent } from '../base-template/base-template.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectViewComponent, NewProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
    // BaseTemplateComponent
  ],
  exports: [
    // BaseTemplateComponent
  ]
})
export class ProjectsModule { }
