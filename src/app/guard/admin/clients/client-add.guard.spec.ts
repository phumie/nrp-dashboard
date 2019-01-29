import { TestBed, async, inject } from '@angular/core/testing';

import { ClientAddGuard } from './client-add.guard';

describe('ClientAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientAddGuard]
    });
  });

  it('should ...', inject([ClientAddGuard], (guard: ClientAddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
