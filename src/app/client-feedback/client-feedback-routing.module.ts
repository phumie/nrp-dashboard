import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFeedbackComponent } from './client-feedback/client-feedback.component';
import { NewFeedbackComponent } from './new-feedback/new-feedback.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        children: [
          {path: 'new-feedback', component: NewFeedbackComponent},
          // { path: ':id', component: ProjectViewComponent},
          { path: '', component: ClientFeedbackComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFeedbackRoutingModule { }
