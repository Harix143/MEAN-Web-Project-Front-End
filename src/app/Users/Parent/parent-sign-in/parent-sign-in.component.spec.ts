import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSignInComponent } from './parent-sign-in.component';

describe('ParentSignInComponent', () => {
  let component: ParentSignInComponent;
  let fixture: ComponentFixture<ParentSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
