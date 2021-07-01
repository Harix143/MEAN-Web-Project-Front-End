import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestdschComponent } from './updatestdsch.component';

describe('UpdatestdschComponent', () => {
  let component: UpdatestdschComponent;
  let fixture: ComponentFixture<UpdatestdschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestdschComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestdschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
