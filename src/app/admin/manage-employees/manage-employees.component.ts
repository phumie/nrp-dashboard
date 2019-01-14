import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Employee } from 'src/app/classes/employee/employee';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css', '../../admin-template/admin-template.component.css'],
  providers: [EmployeeService]
})
export class ManageEmployeesComponent implements OnDestroy {

  employee: Employee;
  subscription: Subscription;

  constructor(private employeeService: EmployeeService) {
    this.subscription = this.employeeService.getEmployee()
      .subscribe(employee => {
        this.employee = employee;
        console.log(this.employee);
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
