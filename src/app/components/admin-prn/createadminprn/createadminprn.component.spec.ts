import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadminprnComponent } from './createadminprn.component';

describe('CreateadminprnComponent', () => {
  let component: CreateadminprnComponent;
  let fixture: ComponentFixture<CreateadminprnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateadminprnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadminprnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
