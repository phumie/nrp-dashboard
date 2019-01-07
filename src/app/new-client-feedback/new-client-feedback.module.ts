import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClientFeedbackRoutingModule } from './new-client-feedback-routing.module';
import { NewClientFeedbackComponent } from './new-client-feedback/new-client-feedback.component';

@NgModule({
  declarations: [NewClientFeedbackComponent],
  imports: [
    CommonModule,
    NewClientFeedbackRoutingModule
  ]
})
export class NewClientFeedbackModule { }
