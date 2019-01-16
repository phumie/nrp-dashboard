import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfqsRoutingModule } from './rfqs-routing.module';
import { RfqsComponent } from './rfqs/rfqs.component';
import { NewRfqComponent } from './new-rfq/new-rfq.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListRfqComponent } from './list-rfq/list-rfq.component';

@NgModule({
  declarations: [RfqsComponent, NewRfqComponent, ListRfqComponent],
  imports: [
    CommonModule,
    RfqsRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ]
})
export class RfqsModule { }
