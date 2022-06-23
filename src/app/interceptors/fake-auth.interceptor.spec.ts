import { TestBed } from '@angular/core/testing';

import { FakeAuthInterceptor } from './fake-auth.interceptor';

describe('FakeAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeAuthInterceptor = TestBed.inject(FakeAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
