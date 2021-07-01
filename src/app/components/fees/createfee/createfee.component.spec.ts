import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefeeComponent } from './createfee.component';

describe('CreatefeeComponent', () => {
  let component: CreatefeeComponent;
  let fixture: ComponentFixture<CreatefeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
