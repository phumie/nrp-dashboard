import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KinService } from 'src/app/services/employees/kin.service';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeKin } from 'src/app/classes/employee/employee-kin';

@Component({
  selector: 'app-manage-employees-kin',
  templateUrl: './manage-employees-kin.component.html',
  styleUrls: ['./manage-employees-kin.component.css']
})
export class ManageEmployeesKinComponent implements OnInit {

  @Input() employee: Employee;
  employeeKinForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeKinService: KinService
  ) { }

  ngOnInit() {
    this.employeeKinForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      alternativeNumber: ['', Validators.required],
      physicalAddress: ['', Validators.required],
      postalAddress: ['', Validators.required],
      idNumber: ['', Validators.required]
    });
  }

  get form() {
    return this.employeeKinForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeKinForm.invalid) {
      return ;
    }

    const firstName = this.form.firstName.value;
    const lastName = this.form.lastName.value;
    const contactNumber = this.form.contactNumber.value;
    const alternativeNumber = this.form.alternativeNumber.value;
    const physicalAddress = this.form.physicalAddress.value;
    const postalAddress = this.form.postalAddress.value;
    const idNumber = this.form.idNumber.value;
    const employeeKin: EmployeeKin = {
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      alternativeNumber: alternativeNumber,
      physicalAddress: physicalAddress,
      postalAddress: postalAddress,
      idNumber: idNumber,
      employeeId: this.employee.employeeId
    };
    this.employeeKinService.addEmployeeKin(employeeKin)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
