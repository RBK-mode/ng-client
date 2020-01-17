import { TestBed } from '@angular/core/testing';

import { FoodsDataService } from './foods-data.service';

describe('FoodsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodsDataService = TestBed.get(FoodsDataService);
    expect(service).toBeTruthy();
  });
});
