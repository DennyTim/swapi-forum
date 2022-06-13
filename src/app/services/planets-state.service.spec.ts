import { TestBed } from '@angular/core/testing';

import { PlanetsStateService } from './planets-state.service';

describe('PlanetsStateService', () => {
  let service: PlanetsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
