import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SupplierService } from 'src/app/services/suppliers/supplier.service';
import { Supplier } from 'src/app/classes/supplier/supplier';
import { SupplierAccount } from 'src/app/classes/supplier/supplier-account';
import { SupplierAccountService } from 'src/app/services/suppliers/supplier-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css', '../../admin-template/admin-template.component.css']
})
export class ManageSuppliersComponent implements OnInit {

  submitted = false;
  supplierForm: FormGroup;
  supplierAccount: SupplierAccount;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private supplierAccountService: SupplierAccountService
  ) { }

  ngOnInit() {
    this.supplierForm = this.formBuilder.group({
      name: ['', Validators.required],
      tell: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      bankName: ['', Validators.required],
      bankAccount: ['', Validators.required],
      branchCode: ['', Validators.required],
      referenceNumber: ['', Validators.required]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.supplierService.getSupplier(id)
        .subscribe(supplier => {
          this.supplierForm.patchValue(supplier);
          this.supplierAccountService.getSuppliersAccount()
            .subscribe(supplierAccounts => {
              const account = supplierAccounts.find(acc => {
                return (acc.supplierId === id);
              });
              if (account) {
                this.supplierAccount = account;
                this.supplierForm.patchValue(account);
              }
            });
        });
    }
  }

  get form() {
    return this.supplierForm.controls;
  }

  logout(): void {
    const employee = this.authService.currentUserValue;
    this.authService.logout(employee.employeeId);
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateSupplier(id);
      this.updateSupplierAccount(id);
    } else {
      this.addSupplier();
    }

  }

  addSupplier(): void {
    const supplier: Supplier = {
      name: this.form.name.value,
      address: this.form.address.value,
      tell: this.form.tell.value,
      email: this.form.email.value
    };

    this.supplierService.addSupplier(supplier)
      .subscribe(sup => {
        const supplierAccount: SupplierAccount = {
          referenceNumber: this.form.referenceNumber.value,
          bankName: this.form.bankName.value,
          bankAccount: this.form.bankAccount.value,
          branchCode: this.form.branchCode.value,
          supplierId: sup.supplierId
        };

        this.supplierAccountService.addSupplierAccount(supplierAccount).subscribe();
      });

  }

  updateSupplier(id: number): void {
    const supplier: Supplier = {
      supplierId: id,
      name: this.form.name.value,
      address: this.form.address.value,
      tell: this.form.tell.value,
      email: this.form.email.value
    };

    this.supplierService.updateSupplier(supplier)
      .subscribe(data => console.log(data));

  }

  updateSupplierAccount(id: number): void {
    const supplierAccount: SupplierAccount = {
      referenceNumber: this.form.referenceNumber.value,
      bankName: this.form.bankName.value,
      bankAccount: this.form.bankAccount.value,
      branchCode: this.form.branchCode.value,
      supplierId: id,
      supplierAccountId: this.supplierAccount.supplierAccountId
    };

    if (this.supplierAccount.supplierAccountId) {
      this.supplierAccountService.updateSupplierAccount(supplierAccount).subscribe();
    } else {
      this.supplierAccountService.addSupplierAccount(supplierAccount).subscribe();
    }

  }

}
