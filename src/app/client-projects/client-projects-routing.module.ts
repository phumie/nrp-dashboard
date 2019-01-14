import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProjectsComponent } from './client-projects/client-projects.component';
import { ClientProjectViewComponent } from './client-project-view/client-project-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        children: [
          // {path: 'new-project', component: NewProjectComponent},
          { path: ':id', component: ClientProjectViewComponent},
          { path: '', component: ClientProjectsComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientProjectsRoutingModule { }
