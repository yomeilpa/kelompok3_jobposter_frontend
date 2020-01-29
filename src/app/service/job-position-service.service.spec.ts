import { TestBed } from '@angular/core/testing';

import { JobPositionServiceService } from './job-position-service.service';

describe('JobPositionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobPositionServiceService = TestBed.get(JobPositionServiceService);
    expect(service).toBeTruthy();
  });
});
