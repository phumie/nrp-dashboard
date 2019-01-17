import { TestBed, async, inject } from '@angular/core/testing';

import { RfqsGuard } from './rfqs.guard';

describe('RfqsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RfqsGuard]
    });
  });

  it('should ...', inject([RfqsGuard], (guard: RfqsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
