import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfqsRoutingModule } from './rfqs-routing.module';
import { RfqsComponent } from './rfqs/rfqs.component';

@NgModule({
  declarations: [RfqsComponent],
  imports: [
    CommonModule,
    RfqsRoutingModule
  ]
})
export class RfqsModule { }
