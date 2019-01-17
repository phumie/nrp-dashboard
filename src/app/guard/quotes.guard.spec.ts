import { TestBed, async, inject } from '@angular/core/testing';

import { QuotesGuard } from './quotes.guard';

describe('QuotesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotesGuard]
    });
  });

  it('should ...', inject([QuotesGuard], (guard: QuotesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
