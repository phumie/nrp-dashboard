import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/classes/client/client';
import { Contact } from 'src/app/classes/client/contact';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';
import { ContactService } from 'src/app/services/clients/contact.service';
import { Employee } from 'src/app/classes/employee/employee';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css', '../../admin-template/admin-template.component.css']
})
export class ClientListComponent implements OnInit {

  loaded = false;
  clients: Client[];
  employee: Employee;
  clientsContact: Contact[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private clientService: GeneralServiceClient,
    private clientContactService: ContactService
  ) { }

  ngOnInit() {
    this.getClients();
    this.employee = this.authService.currentUserValue;
  }

  getClients() {
    this.clientService.getClients().subscribe(clients => {
      this.clientContactService.getClientsContact().subscribe(contacts => {
        contacts.forEach(contact => {
          clients.forEach(client => {
            if (client.clientId === contact.clientId) {
              client.contact = contact;
            }
          });
        });
        this.clients = clients;
        this.loaded = true;
      });
    });
  }

  onSelect(client: Client) {
    const url = `/admin/clients/edit/${client.clientId}`;
    this.router.navigate([url]);
  }

  logout(): void {
    const employee = this.authService.currentUserValue;
    this.authService.logout(employee.employeeId);
    this.router.navigate(['/login']);
  }

}
