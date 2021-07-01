import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminprnComponent } from './editadminprn.component';

describe('EditadminprnComponent', () => {
  let component: EditadminprnComponent;
  let fixture: ComponentFixture<EditadminprnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadminprnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminprnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
