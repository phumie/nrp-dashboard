import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeAddGuard } from './employee-add.guard';

describe('EmployeeAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAddGuard]
    });
  });

  it('should ...', inject([EmployeeAddGuard], (guard: EmployeeAddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
