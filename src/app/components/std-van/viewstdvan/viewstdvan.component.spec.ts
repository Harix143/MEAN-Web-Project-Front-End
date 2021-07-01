import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstdvanComponent } from './viewstdvan.component';

describe('ViewstdvanComponent', () => {
  let component: ViewstdvanComponent;
  let fixture: ComponentFixture<ViewstdvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstdvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstdvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
