import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Client } from 'src/app/classes/client/client';
import { ClientService } from 'src/app/services/clients/client.service';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/classes/employee/employee';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css', '../../admin-template/admin-template.component.css'],
  providers: [ClientService]
})
export class ManageClientsComponent implements OnInit, OnDestroy {

  client: Client;
  employee: Employee;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private clientService: ClientService,
    private clientGeneralService: GeneralServiceClient
    ) {
    this.subscription = this.clientService.getClient()
      .subscribe(client => {
        this.client = client;
      });
  }

  ngOnInit() {
    this.employee = this.authService.currentUserValue;

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientGeneralService.getClient(id)
        .subscribe(client => this.client = client);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteClient(): void {
    if (this.client) {
      this.clientGeneralService.deleteClient(this.client.clientId).subscribe(
        _ => this.router.navigate(['/admin/clients']),
        error => console.log(error)
      );
    }
  }

  logout(): void {
    this.authService.logout(this.employee.employeeId);
    this.router.navigate(['/login']);
  }

}
