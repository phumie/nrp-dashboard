import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfqsComponent } from './rfqs/rfqs.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  // {path: 'rfqs', component: RfqsComponent}
  {
    path: 'rfq',
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: RfqsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfqsRoutingModule { }
