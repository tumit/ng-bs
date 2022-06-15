import { TestBed } from '@angular/core/testing';

import { DeactiveHeroFormGuard } from './deactive-hero-form.guard';

describe('DeactiveHeroFormGuard', () => {
  let guard: DeactiveHeroFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactiveHeroFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
