import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestdcompComponent } from './createstdcomp.component';

describe('CreatestdcompComponent', () => {
  let component: CreatestdcompComponent;
  let fixture: ComponentFixture<CreatestdcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestdcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestdcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
