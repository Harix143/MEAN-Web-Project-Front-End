import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestdschComponent } from './createstdsch.component';

describe('CreatestdschComponent', () => {
  let component: CreatestdschComponent;
  let fixture: ComponentFixture<CreatestdschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestdschComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestdschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
