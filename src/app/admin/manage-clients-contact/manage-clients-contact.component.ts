import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/classes/client/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/clients/client.service';
import { ContactService } from 'src/app/services/clients/contact.service';
import { Contact } from 'src/app/classes/client/contact';

@Component({
  selector: 'app-manage-clients-contact',
  templateUrl: './manage-clients-contact.component.html',
  styleUrls: ['./manage-clients-contact.component.css']
})
export class ManageClientsContactComponent implements OnInit {

  @Input() client: Client;
  submitted = false;
  clientContactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private clientContactService: ContactService
  ) { }

  ngOnInit() {
    this.clientContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  get form() {
    return this.clientContactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.clientContactForm.invalid) {
      return;
    }

    const contact: Contact = {
      firstName: this.form.firstName.value,
      lastName: this.form.lastName.value,
      cellNumber: this.form.contactNumber.value,
      telNumber: this.form.telephomeNumber.value,
      email: this.form.email.value,
      date: this.form.date.value,
      clientId: this.client.clientId
    };
    this.clientContactService.addClientContact(contact)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
