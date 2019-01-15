import { TestBed } from '@angular/core/testing';

import { SupplierAccountService } from './supplier-account.service';

describe('SupplierAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierAccountService = TestBed.get(SupplierAccountService);
    expect(service).toBeTruthy();
  });
});
