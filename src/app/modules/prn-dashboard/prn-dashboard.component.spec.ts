import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnDashboardComponent } from './prn-dashboard.component';

describe('PrnDashboardComponent', () => {
  let component: PrnDashboardComponent;
  let fixture: ComponentFixture<PrnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrnDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
