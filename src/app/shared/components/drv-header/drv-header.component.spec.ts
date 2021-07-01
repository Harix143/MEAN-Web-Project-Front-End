import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrvHeaderComponent } from './drv-header.component';

describe('DrvHeaderComponent', () => {
  let component: DrvHeaderComponent;
  let fixture: ComponentFixture<DrvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrvHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
