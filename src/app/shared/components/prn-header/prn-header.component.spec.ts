import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnHeaderComponent } from './prn-header.component';

describe('PrnHeaderComponent', () => {
  let component: PrnHeaderComponent;
  let fixture: ComponentFixture<PrnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrnHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
