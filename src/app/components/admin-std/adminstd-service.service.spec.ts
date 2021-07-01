import { TestBed } from '@angular/core/testing';

import { AdminstdServiceService } from './adminstd-service.service';

describe('AdminstdServiceService', () => {
  let service: AdminstdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminstdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
