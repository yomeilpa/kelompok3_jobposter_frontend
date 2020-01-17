import { TestBed } from '@angular/core/testing';

import { CandidateDashboardService } from './candidate-dashboard.service';

describe('CandidateDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateDashboardService = TestBed.get(CandidateDashboardService);
    expect(service).toBeTruthy();
  });
});
