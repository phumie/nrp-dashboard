import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SupplierService } from 'src/app/services/suppliers/supplier.service';
import { Supplier } from 'src/app/classes/supplier/supplier';
import { SupplierAccount } from 'src/app/classes/supplier/supplier-account';
import { SupplierAccountService } from 'src/app/services/suppliers/supplier-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/classes/employee/employee';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css', '../../admin-template/admin-template.component.css']
})
export class ManageSuppliersComponent implements OnInit {

  sending = false;
  deleting = false;
  loaded = false;
  submitted = false;
  employee: Employee;
  supplier: Supplier;
  supplierForm: FormGroup;
  supplierAccountId: number;

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
          this.supplier = supplier;
          this.supplierForm.patchValue(supplier);
          this.supplierAccountService.getSuppliersAccount()
            .subscribe(supplierAccounts => {
              const account = supplierAccounts.find(acc => {
                return (acc.supplierId === id);
              });
              if (account) {
                this.supplierAccountId = account.supplierAccountId;
                this.supplierForm.patchValue(account);
                this.loaded = true;
              }
            });
        });
    } else {
      this.loaded = true;
    }

    this.employee = this.authService.currentUserValue;
  }

  get form() {
    return this.supplierForm.controls;
  }

  deleteSupplier(): void {
    this.deleting = true;
    if (this.supplier) {
      this.supplierService.deleteSupplier(this.supplier.supplierId).subscribe(
        _ => {
          this.router.navigate(['/admin/suppliers']);
          this.deleting = false;
        },
        error => {
          console.log(error);
          this.deleting = false;
        }
      );
    } else {
      this.deleting = false;
    }
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

    this.sending = true;
    this.supplierService.addSupplier(supplier)
      .subscribe(sup => {
        this.supplier = sup;
        const supplierAccount: SupplierAccount = {
          referenceNumber: this.form.referenceNumber.value,
          bankName: this.form.bankName.value,
          bankAccount: this.form.bankAccount.value,
          branchCode: this.form.branchCode.value,
          supplierId: sup.supplierId
        };

        this.supplierAccountService.addSupplierAccount(supplierAccount).subscribe(
          _ => this.sending = false,
          error => {
            this.sending = false;
            console.log(error);
          }
        );
      },
      error => {
        this.sending = false;
        console.log(error);
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

    this.sending = true;
    this.supplierService.updateSupplier(supplier)
      .subscribe(
        _ => this.sending = false,
        error => {
          this.sending = false;
          console.log(error);
        });

  }

  updateSupplierAccount(id: number): void {
    const supplierAccount: SupplierAccount = {
      referenceNumber: this.form.referenceNumber.value,
      bankName: this.form.bankName.value,
      bankAccount: this.form.bankAccount.value,
      branchCode: this.form.branchCode.value,
      supplierId: id
    };

    this.sending = true;
    if (this.supplierAccountId) {
      supplierAccount.supplierAccountId = this.supplierAccountId;
      this.supplierAccountService.updateSupplierAccount(supplierAccount).subscribe(
        _ => this.sending = false,
          error => {
            this.sending = false;
            console.log(error);
          }
      );
    } else {
      this.supplierAccountService.addSupplierAccount(supplierAccount).subscribe(
        _ => this.sending = false,
          error => {
            this.sending = false;
            console.log(error);
          }
      );
    }

  }

}
