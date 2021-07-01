import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstdschComponent } from './viewstdsch.component';

describe('ViewstdschComponent', () => {
  let component: ViewstdschComponent;
  let fixture: ComponentFixture<ViewstdschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstdschComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstdschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
