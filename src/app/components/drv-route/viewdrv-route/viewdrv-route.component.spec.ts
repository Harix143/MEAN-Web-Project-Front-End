import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrvRouteComponent } from './viewdrv-route.component';

describe('ViewdrvRouteComponent', () => {
  let component: ViewdrvRouteComponent;
  let fixture: ComponentFixture<ViewdrvRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdrvRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrvRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
