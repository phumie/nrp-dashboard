import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { AuthGuard } from '../guard/auth.guard';
// import { BaseTemplateComponent } from '../base-template/base-template.component';
import { ViewTimelineComponent } from './view-timeline/view-timeline.component';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: 'new-project',
            component: NewProjectComponent
          },
          {
            path: 'view-timeline',
            component: ViewTimelineComponent
          },
          {
            path: ':id',
            component: ProjectViewComponent
          },
          {
            path: '',
            component: ProjectListComponent
          }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
