import { TestBed } from '@angular/core/testing';

import { VanServiceService } from './van-service.service';

describe('VanServiceService', () => {
  let service: VanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
