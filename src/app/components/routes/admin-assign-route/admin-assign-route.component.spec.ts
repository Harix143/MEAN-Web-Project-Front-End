import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignRouteComponent } from './admin-assign-route.component';

describe('AdminAssignRouteComponent', () => {
  let component: AdminAssignRouteComponent;
  let fixture: ComponentFixture<AdminAssignRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
