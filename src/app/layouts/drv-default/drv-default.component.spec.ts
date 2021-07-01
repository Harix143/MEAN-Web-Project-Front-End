import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrvDefaultComponent } from './drv-default.component';

describe('DrvDefaultComponent', () => {
  let component: DrvDefaultComponent;
  let fixture: ComponentFixture<DrvDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrvDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrvDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
