import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrvFooterComponent } from './drv-footer.component';

describe('DrvFooterComponent', () => {
  let component: DrvFooterComponent;
  let fixture: ComponentFixture<DrvFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrvFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
