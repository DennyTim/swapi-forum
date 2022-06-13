import { TestBed } from '@angular/core/testing';

import { PlanetsRequestService } from './planets-request.service';

describe('PlanetsRequestService', () => {
  let service: PlanetsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
