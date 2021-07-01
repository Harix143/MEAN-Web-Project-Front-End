import { TestBed } from '@angular/core/testing';

import { StdschServiceService } from './stdsch-service.service';

describe('StdschServiceService', () => {
  let service: StdschServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdschServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
