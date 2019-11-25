import { TestBed } from '@angular/core/testing';

import { ViewSubCategoryService } from './search/view-sub-category/view-sub-category.service';

describe('ViewSubCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewSubCategoryService = TestBed.get(ViewSubCategoryService);
    expect(service).toBeTruthy();
  });
});
