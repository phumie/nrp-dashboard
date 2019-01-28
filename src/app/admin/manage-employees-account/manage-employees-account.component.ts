import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Employee } from 'src/app/classes/employee/employee';
import { AccountService } from 'src/app/services/employees/account.service';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-employees-account',
  templateUrl: './manage-employees-account.component.html',
  styleUrls: ['./manage-employees-account.component.css']
})
export class ManageEmployeesAccountComponent implements OnInit {

  @Input() employee: Employee;
  employeeAccountForm: FormGroup;
  submitted = false;
  loaded = false;
  submitting = false;
  accountId: number;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.employeeAccountForm = this.formBuilder.group({
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      branchCode: ['', Validators.required]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.accountService.getEmployeeAccounts()
        .subscribe(accounts => {
          this.loaded = true;
          const account = accounts.find(acc => {
            return (acc.employeeId === id);
          });
          if (account) {
            this.accountId = account.employeeAccountsId;
            this.employeeAccountForm.patchValue(account);
          }
        });
    } else {
      this.loaded = true;
    }

    const user: Employee = this.authService.currentUserValue;
    if (user.userRights.admin.write === false) {
      this.disableEdit();
    }
  }

  disableEdit(): void {
    this.form.bankName.disable();
    this.form.accountNumber.disable();
    this.form.branchCode.disable();
  }

  get form() {
    return this.employeeAccountForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.employeeAccountForm.invalid) {
      return ;
    }

    const id = +this.route.snapshot.paramMap.get('id');
    if (id && this.accountId) {

      const employeeAccount: EmployeeAccount = {
        bankName: this.form.bankName.value,
        accountNumber: this.form.accountNumber.value,
        branchCode: this.form.branchCode.value,
        employeeId: id,
        employeeAccountsId: this.accountId
      };

      this.submitting = true;
      this.accountService.updateEmployeeAcccount(employeeAccount)
        .subscribe(
          _ => this.submitting = false,
          error => {
            this.submitting = false;
            console.log(error);
          }
        );

    } else {

      const employeeAccount: EmployeeAccount = {
        bankName: this.form.bankName.value,
        accountNumber: this.form.accountNumber.value,
        branchCode: this.form.branchCode.value,
        employeeId: id ? id : this.employee.employeeId
      };

      this.submitting = true;
      this.accountService.addEmployeeAccount(employeeAccount)
        .subscribe(
          data => {
            this.submitting = false;
            console.log(data);
          },
          error => {
            this.submitting = false;
            console.log(error);
          }
        );

    }
  }

}
