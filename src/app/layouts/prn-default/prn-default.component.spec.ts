import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnDefaultComponent } from './prn-default.component';

describe('PrnDefaultComponent', () => {
  let component: PrnDefaultComponent;
  let fixture: ComponentFixture<PrnDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrnDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrnDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
