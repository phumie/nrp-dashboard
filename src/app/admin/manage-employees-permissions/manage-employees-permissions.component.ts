import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PermissionsService } from 'src/app/services/employees/permissions.service';
import { Employee } from 'src/app/classes/employee/employee';
import { Permissions } from 'src/app/classes/permissions';
import { EmployeePermissions } from 'src/app/classes/employee/employee-permissions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-employees-permissions',
  templateUrl: './manage-employees-permissions.component.html',
  styleUrls: ['./manage-employees-permissions.component.css']
})
export class ManageEmployeesPermissionsComponent implements OnInit {

  @Input() employee: Employee;
  employeePermissionForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private employeePermissionService: PermissionsService
  ) { }

  ngOnInit() {
    this.employeePermissionForm = this.formBuilder.group({
      projectsRead: [false],
      projectsWrite: [false],
      projectsDelete: [false],
      financeRead: [false],
      financeWrite: [false],
      financeDelete: [false],
      rfqRead: [false],
      rfqWrite: [false],
      rfqDelete: [false],
      quotesRead: [false],
      quotesWrite: [false],
      quotesDelete: [false],
      reportsRead: [false],
      reportsWrite: [false],
      reportsDelete: [false],
      adminRead: [false],
      adminWrite: [false],
      adminDelete: [false],
    });

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeePermissionService.getEmployeesPermissions()
        .subscribe(permissions => {
          const permission = permissions.find(perm => {
            return (perm.userLink === id);
          });
          if (permission) {
            console.log(permission);
            this.employeePermissionForm.patchValue(permission);
          }
        });
    }
  }

  get form() {
    return this.employeePermissionForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeePermissionForm.invalid) {
      return ;
    }

    const projectsRead = this.form.projectsRead.value;
    const projectsWrite = this.form.projectsWrite.value;
    const projectsDelete = this.form.projectsDelete.value;
    const financeRead = this.form.financeRead.value;
    const financeWrite = this.form.financeWrite.value;
    const financeDelete = this.form.financeDelete.value;
    const rfqRead = this.form.rfqRead.value;
    const rfqWrite = this.form.rfqWrite.value;
    const rfqDelete = this.form.rfqDelete.value;
    const quotesRead = this.form.quotesRead.value;
    const quotesWrite = this.form.quotesWrite.value;
    const quotesDelete = this.form.quotesDelete.value;
    const reportsRead = this.form.reportsRead.value;
    const reportsWrite = this.form.reportsWrite.value;
    const reportsDelete = this.form.reportsDelete.value;
    const adminRead = this.form.adminRead.value;
    const adminWrite = this.form.adminWrite.value;
    const adminDelete = this.form.adminDelete.value;
    const projects: Permissions = {
      read: projectsRead,
      write: projectsWrite,
      delete: projectsDelete
    };
    const finance: Permissions = {
      read: financeRead,
      write: financeWrite,
      delete: financeDelete
    };
    const rfq: Permissions = {
      read: rfqRead,
      write: rfqWrite,
      delete: rfqDelete
    };
    const quotes: Permissions = {
      read: quotesRead,
      write: quotesWrite,
      delete: quotesDelete
    };
    const reports: Permissions = {
      read: reportsRead,
      write: reportsWrite,
      delete: reportsDelete
    };
    const admin: Permissions = {
      read: adminRead,
      write: adminWrite,
      delete: adminDelete
    };

    const id = +this.route.snapshot.paramMap.get('id');
    const employeePermissions: EmployeePermissions = {
      projects: projects,
      finance: finance,
      rfq: rfq,
      quotes: quotes,
      reports: reports,
      admin: admin,
      userLink: this.employee.employeeId,
    };

    if (id) {
      this.employeePermissionService.updateEmployeePermissions(employeePermissions)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    } else {
      this.employeePermissionService.addEmployeePermissions(employeePermissions)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );

    }

  }

}
