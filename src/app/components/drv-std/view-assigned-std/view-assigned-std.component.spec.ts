import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedStdComponent } from './view-assigned-std.component';

describe('ViewAssignedStdComponent', () => {
  let component: ViewAssignedStdComponent;
  let fixture: ComponentFixture<ViewAssignedStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssignedStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignedStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
