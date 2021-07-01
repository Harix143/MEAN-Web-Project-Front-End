import { TestBed } from '@angular/core/testing';

import { ViewAssignedStdService } from './view-assigned-std.service';

describe('ViewAssignedStdService', () => {
  let service: ViewAssignedStdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAssignedStdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
