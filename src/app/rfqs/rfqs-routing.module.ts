import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfqsComponent } from './rfqs/rfqs.component';

const routes: Routes = [
  {path: 'rfqs', component: RfqsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfqsRoutingModule { }
