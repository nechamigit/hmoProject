import { TestBed } from '@angular/core/testing';

import { PriceDetailsService } from './price-details/price-details.service';

describe('PriceDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceDetailsService = TestBed.get(PriceDetailsService);
    expect(service).toBeTruthy();
  });
});
