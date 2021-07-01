import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincomeditComponent } from './admincomedit.component';

describe('AdmincomeditComponent', () => {
  let component: AdmincomeditComponent;
  let fixture: ComponentFixture<AdmincomeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincomeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincomeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
