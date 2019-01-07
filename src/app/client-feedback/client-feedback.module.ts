import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFeedbackRoutingModule } from './client-feedback-routing.module';
import { ClientFeedbackComponent } from './client-feedback/client-feedback.component';
import { NewFeedbackComponent } from './new-feedback/new-feedback.component';

@NgModule({
  declarations: [ClientFeedbackComponent, NewFeedbackComponent],
  imports: [
    CommonModule,
    ClientFeedbackRoutingModule
  ]
})
export class ClientFeedbackModule { }
