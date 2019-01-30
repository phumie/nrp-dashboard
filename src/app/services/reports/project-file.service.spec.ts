import { TestBed } from '@angular/core/testing';

import { ProjectFileService } from './project-file.service';

describe('ProjectFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectFileService = TestBed.get(ProjectFileService);
    expect(service).toBeTruthy();
  });
});
