import { TestBed } from '@angular/core/testing';

import { DrvcompServiceService } from './drvcomp-service.service';

describe('DrvcompServiceService', () => {
  let service: DrvcompServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrvcompServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
