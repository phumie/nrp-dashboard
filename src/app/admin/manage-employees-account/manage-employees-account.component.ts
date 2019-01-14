import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Employee } from 'src/app/classes/employee/employee';
import { AccountService } from 'src/app/services/employees/account.service';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';

@Component({
  selector: 'app-manage-employees-account',
  templateUrl: './manage-employees-account.component.html',
  styleUrls: ['./manage-employees-account.component.css']
})
export class ManageEmployeesAccountComponent implements OnInit {

  @Input() employee: Employee;
  employeeAccountForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.employeeAccountForm = this.formBuilder.group({
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      branchCode: ['', Validators.required]
    });
  }

  get form() {
    return this.employeeAccountForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.employeeAccountForm.invalid) {
      return ;
    }

    const employeeID = this.employee.employeeId;
    const bankName = this.form.bankName.value;
    const accountNumber = this.form.accountNumber.value;
    const branchCode = this.form.branchCode.value;
    const employeeAccount: EmployeeAccount = {
      bankName: bankName,
      accountNumber: accountNumber,
      branchName: branchCode,
      employeeId: employeeID
    };
    this.accountService.addEmployeeAccount(employeeAccount)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
