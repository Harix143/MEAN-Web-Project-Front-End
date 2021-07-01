import { TestBed } from '@angular/core/testing';

import { PrncompServiceService } from './prncomp-service.service';

describe('PrncompServiceService', () => {
  let service: PrncompServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrncompServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
