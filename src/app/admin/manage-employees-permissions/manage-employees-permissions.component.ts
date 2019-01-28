import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PermissionsService } from 'src/app/services/employees/permissions.service';
import { Employee } from 'src/app/classes/employee/employee';
import { Permissions } from 'src/app/classes/permissions';
import { EmployeePermissions } from 'src/app/classes/employee/employee-permissions';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-employees-permissions',
  templateUrl: './manage-employees-permissions.component.html',
  styleUrls: ['./manage-employees-permissions.component.css']
})
export class ManageEmployeesPermissionsComponent implements OnInit {

  @Input() employee: Employee;
  employeePermissionForm: FormGroup;
  permissionsId: number;
  submitted = false;
  sending = false;
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private employeePermissionService: PermissionsService
  ) { }

  ngOnInit() {
    this.employeePermissionForm = this.formBuilder.group({
      projects: this.formBuilder.group({
        read: [false],
        write: [false],
        delete: [false]
      }),
      finance: this.formBuilder.group({
        read: [false],
        write: [false],
        delete: [false]
      }),
      rfq: this.formBuilder.group({
        read: [false],
        write: [false],
        delete: [false]
      }),
      quotes: this.formBuilder.group({
        read: [false],
        write: [false],
        delete: [false]
      }),
      reports: this.formBuilder.group({
        read: [false],
        write: [false],
        delete: [false]
      }),
      admin: this.formBuilder.group({
        read: [false],
        write: [false],
        delete: [false]
      })
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeePermissionService.getEmployeePermissions(id)
        .subscribe(permissions => {
          this.permissionsId = permissions.userLink;
          this.employeePermissionForm.patchValue(permissions);
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

  disableEdit(): void {
    this.form.projects.disable();
    this.form.finance.disable();
    this.form.rfq.disable();
    this.form.quotes.disable();
    this.form.reports.disable();
    this.form.admin.disable();
  }

  get form() {
    return this.employeePermissionForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeePermissionForm.invalid) {
      return ;
    }

    const projects: Permissions = this.form.projects.value;
    const finance: Permissions = this.form.finance.value;
    const rfqs: Permissions = this.form.rfq.value;
    const quotes: Permissions = this.form.quotes.value;
    const reports: Permissions = this.form.reports.value;
    const admin: Permissions = this.form.admin.value;

    const id = +this.route.snapshot.paramMap.get('id');
    const employeePermissions: EmployeePermissions = {
      projects: projects,
      finance: finance,
      rfq: rfqs,
      quotes: quotes,
      reports: reports,
      admin: admin
    };

    this.sending = true;
    if (id && this.permissionsId) {
      employeePermissions.userLink = id;
      this.employeePermissionService.updateEmployeePermissions(employeePermissions)
        .subscribe(
          _ => this.sending = false,
          error => console.log(error));
    } else {
      employeePermissions.userLink = this.employee.employeeId;
      this.employeePermissionService.addEmployeePermissions(employeePermissions)
      .subscribe(
        _ => this.sending = false,
        error => {
          this.sending = false;
          console.log(error);
        });
    }

  }

}
