import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignvanComponent } from './assignvan.component';

describe('AssignvanComponent', () => {
  let component: AssignvanComponent;
  let fixture: ComponentFixture<AssignvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
