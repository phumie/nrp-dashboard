import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/classes/client/client';
import { Contact } from 'src/app/classes/client/contact';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css', '../../admin-template/admin-template.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  clientContact: Contact;

  constructor(
    private router: Router,
    private authService: AuthService,
    private clientService: GeneralServiceClient
  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(client => this.clients = client);
  }

  onSelect(client: Client) {
    const url = `/admin/clients/edit/${client.clientId}`;
    this.router.navigate([url]);
  }

}
