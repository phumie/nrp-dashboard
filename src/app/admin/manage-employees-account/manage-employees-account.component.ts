import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Employee } from 'src/app/classes/employee/employee';
import { AccountService } from 'src/app/services/employees/account.service';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-employees-account',
  templateUrl: './manage-employees-account.component.html',
  styleUrls: ['./manage-employees-account.component.css']
})
export class ManageEmployeesAccountComponent implements OnInit {

  @Input() employee: Employee;
  employeeAccountForm: FormGroup;
  submitted = false;
  accountId: number;

  constructor(
    private route: ActivatedRoute,
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
          const account = accounts.find(acc => {
            return (acc.employeeId === id);
          });
          if (account) {
            this.accountId = account.employeeAccountId;
            this.employeeAccountForm.patchValue(account);
          }
        });
    }
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
    if (id) {

      console.log(this.accountId);
      const employeeAccount: EmployeeAccount = {
        bankName: this.form.bankName.value,
        accountNumber: this.form.accountNumber.value,
        branchCode: this.form.branchCode.value,
        employeeId: id,
        employeeAccountId: this.accountId
      };

      this.accountService.updateEmployeeAcccount(employeeAccount)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );

    } else {

      const employeeAccount: EmployeeAccount = {
        bankName: this.form.bankName.value,
        accountNumber: this.form.accountNumber.value,
        branchCode: this.form.branchCode.value,
        employeeId: this.employee.employeeId
      };

      this.accountService.addEmployeeAccount(employeeAccount)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );

    }
  }

}
