import { TestBed } from '@angular/core/testing';

import { DoctypeService } from './doctype.service';

describe('DoctypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctypeService = TestBed.get(DoctypeService);
    expect(service).toBeTruthy();
  });
});
