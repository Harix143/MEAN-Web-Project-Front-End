import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvanComponent } from './viewvan.component';

describe('ViewvanComponent', () => {
  let component: ViewvanComponent;
  let fixture: ComponentFixture<ViewvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
