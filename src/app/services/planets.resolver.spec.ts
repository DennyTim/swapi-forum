import { TestBed } from '@angular/core/testing';

import { PlanetsResolver } from './planets.resolver';

describe('PlanetsResolver', () => {
  let resolver: PlanetsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlanetsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
