import { TestBed } from '@angular/core/testing';

import { JobKategoriService } from './job-kategori.service';

describe('JobKategoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobKategoriService = TestBed.get(JobKategoriService);
    expect(service).toBeTruthy();
  });
});
