import { TestBed } from '@angular/core/testing';

import { WorkexperienceService } from './workexperience.service';

describe('WorkexperienceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkexperienceService = TestBed.get(WorkexperienceService);
    expect(service).toBeTruthy();
  });
});
