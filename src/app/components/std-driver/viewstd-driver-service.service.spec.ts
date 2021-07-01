import { TestBed } from '@angular/core/testing';

import { ViewstdDriverServiceService } from './viewstd-driver-service.service';

describe('ViewstdDriverServiceService', () => {
  let service: ViewstdDriverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewstdDriverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
