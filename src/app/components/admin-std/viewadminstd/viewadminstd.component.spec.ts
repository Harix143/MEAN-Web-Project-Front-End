import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminstdComponent } from './viewadminstd.component';

describe('ViewadminstdComponent', () => {
  let component: ViewadminstdComponent;
  let fixture: ComponentFixture<ViewadminstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewadminstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadminstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
