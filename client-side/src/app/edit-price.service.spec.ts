import { TestBed } from '@angular/core/testing';

import { EditPriceService } from './edit-compare/edit-price.service';

describe('EditPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPriceService = TestBed.get(EditPriceService);
    expect(service).toBeTruthy();
  });
});
