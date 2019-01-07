import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewClientProjectRoutingModule } from './view-client-project-routing.module';
import { ViewClientProjectComponent } from './view-client-project/view-client-project.component';

@NgModule({
  declarations: [ViewClientProjectComponent],
  imports: [
    CommonModule,
    ViewClientProjectRoutingModule
  ]
})
export class ViewClientProjectModule { }
