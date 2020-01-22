import { TestBed } from '@angular/core/testing';

import { CandidateHomepageService } from './candidate-homepage.service';

describe('CandidateHomepageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateHomepageService = TestBed.get(CandidateHomepageService);
    expect(service).toBeTruthy();
  });
});
