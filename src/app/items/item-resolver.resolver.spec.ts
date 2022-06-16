import { TestBed } from '@angular/core/testing';

import { ItemResolverResolver } from './item-resolver.resolver';

describe('ItemResolverResolver', () => {
  let resolver: ItemResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ItemResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
