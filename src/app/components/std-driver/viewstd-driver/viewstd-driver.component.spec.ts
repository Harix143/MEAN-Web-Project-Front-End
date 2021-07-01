import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstdDriverComponent } from './viewstd-driver.component';

describe('ViewstdDriverComponent', () => {
  let component: ViewstdDriverComponent;
  let fixture: ComponentFixture<ViewstdDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstdDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstdDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
