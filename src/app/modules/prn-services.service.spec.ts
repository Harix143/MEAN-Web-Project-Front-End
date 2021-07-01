import { TestBed } from '@angular/core/testing';

import { PrnServicesService } from './prn-services.service';

describe('PrnServicesService', () => {
  let service: PrnServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrnServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
