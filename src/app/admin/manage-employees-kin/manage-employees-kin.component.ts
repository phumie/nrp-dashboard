import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KinService } from 'src/app/services/employees/kin.service';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeKin } from 'src/app/classes/employee/employee-kin';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
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

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeKinService.getEmployeesKin()
        .subscribe(kins => {
          const kin = kins.find(k => {
            return (k.employeeId === id);
          });
          if (kin) {
            this.employeeKinForm.patchValue(kin);
          }
        });
    }
  }

  get form() {
    return this.employeeKinForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeKinForm.invalid) {
      return ;
    }

    const employeeId = +this.route.snapshot.paramMap.get('id');
    const employeeKin: EmployeeKin = {
      firstName: this.form.firstName.value,
      lastName: this.form.lastName.value,
      contactNumber: this.form.contactNumber.value,
      alternativeNumber: this.form.alternativeNumber.value,
      physicalAddress: this.form.physicalAddress.value,
      postalAddress: this.form.postalAddress.value,
      idNumber: this.form.idNumber.value,
      employeeId: employeeId
    };

    if (employeeId) {
      this.employeeKinService.updateEmployeeKin(employeeKin)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    } else {
      this.employeeKinService.addEmployeeKin(employeeKin)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    }
  }

}
