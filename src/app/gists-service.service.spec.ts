import { TestBed } from '@angular/core/testing';

import { GistsServiceService } from './gists-service.service';

describe('GistsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GistsServiceService = TestBed.get(GistsServiceService);
    expect(service).toBeTruthy();
  });
});
