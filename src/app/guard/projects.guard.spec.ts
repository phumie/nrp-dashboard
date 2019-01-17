import { TestBed, async, inject } from '@angular/core/testing';

import { ProjectsGuard } from './projects.guard';

describe('ProjectsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsGuard]
    });
  });

  it('should ...', inject([ProjectsGuard], (guard: ProjectsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
