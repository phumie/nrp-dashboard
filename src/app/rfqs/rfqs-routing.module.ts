import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfqsComponent } from './rfqs/rfqs.component';
import { AuthGuard } from '../guard/auth.guard';
import { NewRfqComponent } from './new-rfq/new-rfq.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: RfqsComponent },
          { path: 'new-rfq', component: NewRfqComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfqsRoutingModule { }
