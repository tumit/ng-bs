import { TestBed } from '@angular/core/testing';

import { ItemGuardService } from './item-guard.service';

describe('ItemGuardService', () => {
  let service: ItemGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
