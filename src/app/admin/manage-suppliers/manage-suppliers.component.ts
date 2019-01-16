import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SupplierService } from 'src/app/services/suppliers/supplier.service';
import { Supplier } from 'src/app/classes/supplier/supplier';
import { SupplierAccount } from 'src/app/classes/supplier/supplier-account';
import { SupplierAccountService } from 'src/app/services/suppliers/supplier-account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css', '../../admin-template/admin-template.component.css']
})
export class ManageSuppliersComponent implements OnInit {

  submitted = false;
  supplier: Supplier;
  supplierForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private supplierAccountService: SupplierAccountService
  ) { }

  ngOnInit() {
    this.supplierForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      physicalAddress: ['', Validators.required],
      email: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      branchCode: ['', Validators.required],
      referenceNumber: ['', Validators.required]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.supplierService.getSupplier(id)
        .subscribe(supplier => this.supplierForm.patchValue(supplier));
    }
  }

  get form() {
    return this.supplierForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }

    const supplier: Supplier = {
      name: this.form.businessName.value,
      address: this.form.businessName.value,
      tell: this.form.telephoneNumber.value,
      email: this.form.email.value
    };
    this.supplierService.addSupplier(supplier)
      .subscribe(sup => {
        const supplierAccount: SupplierAccount = {
          referenceNumber: this.form.referenceNumber.value,
          bankName: this.form.bankName.value,
          bankAccount: this.form.accountNumber.value,
          branchCode: this.form.branchCode.value,
          supplierId: sup.supplierId
        };
        this.supplierAccountService.addSupplierAccount(supplierAccount)
          .subscribe(data => console.log(data));
      });
  }

}
