import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprncompComponent } from './viewprncomp.component';

describe('ViewprncompComponent', () => {
  let component: ViewprncompComponent;
  let fixture: ComponentFixture<ViewprncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprncompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
