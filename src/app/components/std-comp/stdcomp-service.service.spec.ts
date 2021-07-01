import { TestBed } from '@angular/core/testing';

import { StdcompServiceService } from './stdcomp-service.service';

describe('StdcompServiceService', () => {
  let service: StdcompServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdcompServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
