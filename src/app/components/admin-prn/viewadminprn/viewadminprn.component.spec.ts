import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminprnComponent } from './viewadminprn.component';

describe('ViewadminprnComponent', () => {
  let component: ViewadminprnComponent;
  let fixture: ComponentFixture<ViewadminprnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewadminprnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadminprnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
