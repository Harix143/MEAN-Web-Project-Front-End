import { TestBed } from '@angular/core/testing';

import { AdminprnServiceService } from './adminprn-service.service';

describe('AdminprnServiceService', () => {
  let service: AdminprnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminprnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
