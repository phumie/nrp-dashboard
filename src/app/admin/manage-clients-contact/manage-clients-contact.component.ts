import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/classes/client/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/clients/client.service';
import { ContactService } from 'src/app/services/clients/contact.service';
import { Contact } from 'src/app/classes/client/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-clients-contact',
  templateUrl: './manage-clients-contact.component.html',
  styleUrls: ['./manage-clients-contact.component.css']
})
export class ManageClientsContactComponent implements OnInit {

  @Input() client: Client;
  submitted = false;
  clientContactId: number;
  clientContactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
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

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientContactService.getClientsContact()
        .subscribe(contacts => {
          const contact = contacts.find(cnt => {
            return (cnt.clientId === id);
          });
          if (contact) {
            this.clientContactId = contact.clientContactId;
            this.clientContactForm.patchValue(contact);
          }
        });
    }
  }

  get form() {
    return this.clientContactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.clientContactForm.invalid) {
      return;
    }

    const clientId = +this.route.snapshot.paramMap.get('id');
    const firstName = this.form.firstName.value;
    const lastName = this.form.lastName.value;
    const cellNumber = this.form.contactNumber.value;
    const telNumber = this.form.telephoneNumber.value;
    const email = this.form.email.value;
    const date = this.form.date.value;

    if (clientId && this.clientContactId) {

      const contact: Contact = {
        firstName: firstName,
        lastName: lastName,
        cellNumber: cellNumber,
        telNumber: telNumber,
        email: email,
        date: date,
        clientId: clientId,
        clientContactId: this.clientContactId
      };

      this.clientContactService.updateClient(contact)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );

    } else {

      const contact: Contact = {
        firstName: firstName,
        lastName: lastName,
        cellNumber: cellNumber,
        telNumber: telNumber,
        email: email,
        date: date,
        clientId: clientId ? clientId : this.client.clientId
      };
      this.clientContactService.addClientContact(contact)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );

    }
  }

}
