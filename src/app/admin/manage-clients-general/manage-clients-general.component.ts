import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from 'src/app/services/clients/client.service';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';
import { Client } from 'src/app/classes/client/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-clients-general',
  templateUrl: './manage-clients-general.component.html',
  styleUrls: ['./manage-clients-general.component.css']
})
export class ManageClientsGeneralComponent implements OnInit {

  submitted = false;
  client: Client;
  clientForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private clientGeneralService: GeneralServiceClient
  ) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      vatNumber: ['', Validators.required],
      physicalAddress: ['', Validators.required]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientGeneralService.getClient(id)
        .subscribe(emp => { this.clientForm.patchValue(emp); console.log(emp); });
    }
  }

  get form() {
    return this.clientForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    }

    const client: Client = {
      clientName: this.form.clientName.value,
      vatNumber: this.form.vatNumber.value,
      address: this.form.physicalAddress.value
    };

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientGeneralService.updateClient(client)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    } else {
      this.clientGeneralService.addClient(client)
        .subscribe(
          data => { this.clientService.storeClient(data); console.log(data); },
          error => console.log(error)
        );
    }
  }
}
