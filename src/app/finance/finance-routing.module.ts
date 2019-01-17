import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceComponent } from './finance/finance.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: FinanceComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
