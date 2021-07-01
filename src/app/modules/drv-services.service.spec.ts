import { TestBed } from '@angular/core/testing';

import { DrvServicesService } from './drv-services.service';

describe('DrvServicesService', () => {
  let service: DrvServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrvServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
