import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrvcompComponent } from './viewdrvcomp.component';

describe('ViewdrvcompComponent', () => {
  let component: ViewdrvcompComponent;
  let fixture: ComponentFixture<ViewdrvcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdrvcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrvcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
