import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Client } from 'src/app/classes/client/client';
import { ClientService } from 'src/app/services/clients/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css', '../../admin-template/admin-template.component.css'],
  providers: [ClientService]
})
export class ManageClientsComponent implements OnDestroy {

  client: Client;
  subscription: Subscription;

  constructor(private clientService: ClientService) {
    this.subscription = this.clientService.getClient()
      .subscribe(client => this.client = client);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
