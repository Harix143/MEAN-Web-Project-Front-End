import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrvVanComponent } from './viewdrv-van.component';

describe('ViewdrvVanComponent', () => {
  let component: ViewdrvVanComponent;
  let fixture: ComponentFixture<ViewdrvVanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdrvVanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrvVanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
