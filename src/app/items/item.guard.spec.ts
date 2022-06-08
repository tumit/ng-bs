import { TestBed } from '@angular/core/testing';

import { ItemGuard } from './item.guard';

describe('ItemGuardService', () => {
  let service: ItemGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
