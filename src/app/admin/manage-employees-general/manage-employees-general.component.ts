import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employees/employee.service';
import { GeneralService } from 'src/app/services/employees/general.service';
import { Employee } from 'src/app/classes/employee/employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-manage-employees-general',
  templateUrl: './manage-employees-general.component.html',
  styleUrls: ['./manage-employees-general.component.css']
})
export class ManageEmployeesGeneralComponent implements OnInit {

  submitted = false;
  employeeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
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
        .subscribe(emp => this.employeeForm.patchValue(emp));
    }
  }

  get form() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }

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

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeGeneralService.updateEmployee(employee)
        .subscribe(
          data => this.employeeService.storeEmployee(data),
          error => console.log(error)
        );
        $(document).ready(function(){
          alert("Employee information updated.");
        });
    } else {
      this.employeeGeneralService.addEmployee(employee)
        .subscribe(
          data => this.employeeService.storeEmployee(data),
          error => console.log(error)
      );
      $(document).ready(function(){
        alert("Employee added");
      });
    }
  }
}
