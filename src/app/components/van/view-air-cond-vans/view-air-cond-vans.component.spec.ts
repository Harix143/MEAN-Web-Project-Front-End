import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirCondVansComponent } from './view-air-cond-vans.component';

describe('ViewAirCondVansComponent', () => {
  let component: ViewAirCondVansComponent;
  let fixture: ComponentFixture<ViewAirCondVansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAirCondVansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAirCondVansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
