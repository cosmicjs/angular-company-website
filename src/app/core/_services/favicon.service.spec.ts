import { TestBed } from '@angular/core/testing';

import { FaviconService } from './favicon.service';

describe('FaviconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaviconService = TestBed.get(FaviconService);
    expect(service).toBeTruthy();
  });
});
