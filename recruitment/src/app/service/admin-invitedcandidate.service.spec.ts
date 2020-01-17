import { TestBed } from '@angular/core/testing';

import { AdminInvitedcandidateService } from './admin-invitedcandidate.service';

describe('AdminInvitedcandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminInvitedcandidateService = TestBed.get(AdminInvitedcandidateService);
    expect(service).toBeTruthy();
  });
});
