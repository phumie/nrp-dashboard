import { Component, OnInit } from '@angular/core';
import { Rfq } from '../../classes/rfq/rfq';
import { Client } from '../../classes/client/client';
import { GeneralServiceClient } from '../../services/clients/general.service';
import { RfqService } from '../../services/rfq.service';

@Component({
  selector: 'app-rfqs',
  templateUrl: './rfqs.component.html',
  styleUrls: ['./rfqs.component.css', '../../base-template/base-template.component.css']
})
export class RfqsComponent implements OnInit {

  rfqs: Rfq[];
  clients: Client[];

  constructor(
    private rfqServices: RfqService,
    private clientServices: GeneralServiceClient
  ) { }

  ngOnInit() {
    this.getRfqs();
    this.getClients();
  }

  getRfqs(): void {
    console.log('Retrieving rfqs');
    this.rfqServices.getRfqs()
      .subscribe(rfqs => {
        console.log(rfqs);
        this.rfqs = rfqs;
      });
  }

  getClients(): void {
    console.log('Retrieving clients');
    this.clientServices.getClients()
      .subscribe(clients => {
        this.clients = clients;
      });
  }
}
