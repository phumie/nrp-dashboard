import { TestBed } from '@angular/core/testing';

import { KinService } from './kin.service';

describe('KinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KinService = TestBed.get(KinService);
    expect(service).toBeTruthy();
  });
});
