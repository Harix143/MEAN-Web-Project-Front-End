import { TestBed } from '@angular/core/testing';

import { ViewstdvanserviceService } from './viewstdvanservice.service';

describe('ViewstdvanserviceService', () => {
  let service: ViewstdvanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewstdvanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
