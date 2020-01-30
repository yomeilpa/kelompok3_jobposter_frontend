import { TestBed } from '@angular/core/testing';

import { JobApplyService } from './job-apply.service';

describe('JobApplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobApplyService = TestBed.get(JobApplyService);
    expect(service).toBeTruthy();
  });
});
