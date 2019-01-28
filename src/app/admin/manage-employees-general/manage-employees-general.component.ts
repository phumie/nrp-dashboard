import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employees/employee.service';
import { GeneralService } from 'src/app/services/employees/general.service';
import { Employee } from 'src/app/classes/employee/employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-employees-general',
  templateUrl: './manage-employees-general.component.html',
  styleUrls: ['./manage-employees-general.component.css']
})
export class ManageEmployeesGeneralComponent implements OnInit {

  loaded = false;
  submitted = false;
  sending = false;
  employeeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private employeeGeneralService: GeneralService
  ) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      maidenName: [''],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      alternativeNumber: [''],
      physicalAddress: ['', Validators.required],
      postalAddress: ['', Validators.required],
      said: ['', Validators.required],
      email: ['', Validators.required]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeGeneralService.getEmployee(id)
        .subscribe(emp => {
          this.employeeForm.patchValue(emp);
          this.loaded = true;
        });
    } else {
      this.loaded = true;
    }

    const user: Employee = this.authService.currentUserValue;
    if (user.userRights.admin.write === false) {
      this.disableEdit();
    }
  }

  get form() {
    return this.employeeForm.controls;
  }

  disableEdit(): void {
    this.form.firstName.disable();
    this.form.maidenName.disable();
    this.form.lastName.disable();
    this.form.contactNumber.disable();
    this.form.alternativeNumber.disable();
    this.form.physicalAddress.disable();
    this.form.postalAddress.disable();
    this.form.said.disable();
    this.form.email.disable();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateEmployeeGeneral(id);
    } else {
      this.addEmployeeGeneral();
    }
  }

  updateEmployeeGeneral(id: number): void {
    const employee: Employee = {
      firstName: this.form.firstName.value,
      maidenName: this.form.maidenName.value,
      lastName: this.form.lastName.value,
      contactNumber: this.form.contactNumber.value,
      alternativeNumber: this.form.alternativeNumber.value,
      physicalAddress: this.form.physicalAddress.value,
      postalAddress: this.form.postalAddress.value,
      said: this.form.said.value,
      email: this.form.email.value,
      employeeId: id
    };

    this.sending = true;
    this.employeeGeneralService.updateEmployee(employee)
      .subscribe(
        data => {
          this.employeeService.storeEmployee(data);
          this.sending = false;
        },
        error => {
          console.log(error);
          this.sending = false;
        }
      );
  }

  addEmployeeGeneral(): void {
    const employee: Employee = {
      firstName: this.form.firstName.value,
      maidenName: this.form.maidenName.value,
      lastName: this.form.lastName.value,
      contactNumber: this.form.contactNumber.value,
      alternativeNumber: this.form.alternativeNumber.value,
      physicalAddress: this.form.physicalAddress.value,
      postalAddress: this.form.postalAddress.value,
      said: this.form.said.value,
      email: this.form.email.value
    };

    this.sending = true;
    this.employeeGeneralService.addEmployee(employee)
      .subscribe(
        data => {
          this.employeeService.storeEmployee(data);
          this.sending = false;
        },
        error => {
          console.log(error);
          this.sending = false;
        }
    );
  }
}
