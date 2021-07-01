import { TestBed } from '@angular/core/testing';

import { AdmincomserviceService } from './admincomservice.service';

describe('AdmincomserviceService', () => {
  let service: AdmincomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
