import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance/finance.component';
import { ViewTransactionComponent } from './finance/view-transaction/view-transaction.component';
import { ManageTransactionsComponent } from './finance/manage-transactions/manage-transactions.component';

@NgModule({
  declarations: [FinanceComponent, ViewTransactionComponent, ManageTransactionsComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
