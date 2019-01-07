import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProjectsRoutingModule } from './client-projects-routing.module';
import { ClientProjectsComponent } from './client-projects/client-projects.component';
import { ClientProjectViewComponent } from './client-project-view/client-project-view.component';

@NgModule({
  declarations: [ClientProjectsComponent, ClientProjectViewComponent],
  imports: [
    CommonModule,
    ClientProjectsRoutingModule
  ]
})
export class ClientProjectsModule { }
