import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstdcompComponent } from './viewstdcomp.component';

describe('ViewstdcompComponent', () => {
  let component: ViewstdcompComponent;
  let fixture: ComponentFixture<ViewstdcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstdcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstdcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
