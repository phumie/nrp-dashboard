import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KinService } from 'src/app/services/employees/kin.service';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeKin } from 'src/app/classes/employee/employee-kin';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-employees-kin',
  templateUrl: './manage-employees-kin.component.html',
  styleUrls: ['./manage-employees-kin.component.css']
})
export class ManageEmployeesKinComponent implements OnInit {

  @Input() employee: Employee;
  employeeKinForm: FormGroup;
  employeeKinId: number;
  submitted = false;
  sending = false;
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
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
      said: ['', Validators.required]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeKinService.getEmployeesKin()
        .subscribe(kins => {
          this.loaded = true;
          const kin = kins.find(k => {
            return (k.employeeId === id);
          });
          if (kin) {
            this.employeeKinForm.patchValue(kin);
            this.employeeKinId = kin.employeeKinId;
          }
        });
    }

    const user: Employee = this.authService.currentUserValue;
    if (user.userRights.admin.write === false) {
      this.disableEdit();
    }
  }

  disableEdit(): void {
    this.form.firstName.disable();
    this.form.lastName.disable();
    this.form.contactNumber.disable();
    this.form.alternativeNumber.disable();
    this.form.physicalAddress.disable();
    this.form.postalAddress.disable();
    this.form.said.disable();
  }

  get form() {
    return this.employeeKinForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeKinForm.invalid) {
      console.log('failed');
      return ;
    }

    const employeeId = +this.route.snapshot.paramMap.get('id');
    if (employeeId && this.employeeKinId) {

      const employeeKin: EmployeeKin = {
        firstName: this.form.firstName.value,
        lastName: this.form.lastName.value,
        contactNumber: this.form.contactNumber.value,
        alternativeNumber: this.form.alternativeNumber.value,
        physicalAddress: this.form.physicalAddress.value,
        postalAddress: this.form.postalAddress.value,
        said: this.form.said.value,
        employeeId: employeeId,
        employeeKinId: this.employeeKinId
      };

      this.sending = true;
      this.employeeKinService.updateEmployeeKin(employeeKin)
        .subscribe(
          _ => this.sending = false,
          error => {
            console.log(error);
            this.sending = false;
          }
        );

    } else {

      const employeeKin: EmployeeKin = {
        firstName: this.form.firstName.value,
        lastName: this.form.lastName.value,
        contactNumber: this.form.contactNumber.value,
        alternativeNumber: this.form.alternativeNumber.value,
        physicalAddress: this.form.physicalAddress.value,
        postalAddress: this.form.postalAddress.value,
        said: this.form.said.value,
        employeeId: employeeId ? employeeId : this.employee.employeeId
      };

      this.sending = true;
      this.employeeKinService.addEmployeeKin(employeeKin)
        .subscribe(
          _ => this.sending = false,
          error => {
            console.log(error);
            this.sending = false;
          }
        );
    }
  }

}
