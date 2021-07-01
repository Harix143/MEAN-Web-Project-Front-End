import { TestBed } from '@angular/core/testing';

import { ViewdrvRouteServiceService } from './viewdrv-route-service.service';

describe('ViewdrvRouteServiceService', () => {
  let service: ViewdrvRouteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdrvRouteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
