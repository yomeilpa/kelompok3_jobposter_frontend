import { TestBed } from '@angular/core/testing';

import { AdminApprovedcandidateService } from './admin-approvedcandidate.service';

describe('AdminApprovedcandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminApprovedcandidateService = TestBed.get(AdminApprovedcandidateService);
    expect(service).toBeTruthy();
  });
});
