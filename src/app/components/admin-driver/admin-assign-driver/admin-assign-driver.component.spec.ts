import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignDriverComponent } from './admin-assign-driver.component';

describe('AdminAssignDriverComponent', () => {
  let component: AdminAssignDriverComponent;
  let fixture: ComponentFixture<AdminAssignDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
