import { TestBed } from '@angular/core/testing';

import { CandidateProfileService } from './candidate-profile.service';

describe('CandidateProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateProfileService = TestBed.get(CandidateProfileService);
    expect(service).toBeTruthy();
  });
});
