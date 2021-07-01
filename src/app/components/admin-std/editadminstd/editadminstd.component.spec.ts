import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminstdComponent } from './editadminstd.component';

describe('EditadminstdComponent', () => {
  let component: EditadminstdComponent;
  let fixture: ComponentFixture<EditadminstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadminstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
