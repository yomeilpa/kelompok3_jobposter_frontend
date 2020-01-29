import { TestBed } from '@angular/core/testing';

import { PostingjobService } from './postingjob.service';

describe('PostingjobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostingjobService = TestBed.get(PostingjobService);
    expect(service).toBeTruthy();
  });
});
