import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrvDashboardComponent } from './drv-dashboard.component';

describe('DrvDashboardComponent', () => {
  let component: DrvDashboardComponent;
  let fixture: ComponentFixture<DrvDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrvDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
