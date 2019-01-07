import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewClientFeedbackRoutingModule } from './view-client-feedback-routing.module';
import { ViewClientFeedbackComponent } from './view-client-feedback/view-client-feedback.component';

@NgModule({
  declarations: [ViewClientFeedbackComponent],
  imports: [
    CommonModule,
    ViewClientFeedbackRoutingModule
  ]
})
export class ViewClientFeedbackModule { }
