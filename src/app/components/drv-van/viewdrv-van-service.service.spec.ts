import { TestBed } from '@angular/core/testing';

import { ViewdrvVanServiceService } from './viewdrv-van-service.service';

describe('ViewdrvVanServiceService', () => {
  let service: ViewdrvVanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdrvVanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
