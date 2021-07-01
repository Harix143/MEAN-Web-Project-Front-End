import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnFooterComponent } from './prn-footer.component';

describe('PrnFooterComponent', () => {
  let component: PrnFooterComponent;
  let fixture: ComponentFixture<PrnFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrnFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
