import { TestBed } from '@angular/core/testing';

import { CosmicService } from './cosmic.service';

describe('CosmicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CosmicService = TestBed.get(CosmicService);
    expect(service).toBeTruthy();
  });
});
