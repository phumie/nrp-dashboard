import { TestBed, async, inject } from '@angular/core/testing';

import { SupplierAddGuard } from './supplier-add.guard';

describe('SupplierAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierAddGuard]
    });
  });

  it('should ...', inject([SupplierAddGuard], (guard: SupplierAddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
