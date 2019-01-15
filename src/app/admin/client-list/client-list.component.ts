import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/classes/client/client';
import { Contact } from 'src/app/classes/client/contact';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css', '../../admin-template/admin-template.component.css']
})
export class ClientListComponent implements OnInit {

  client: Client;
  clientContact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
