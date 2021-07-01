import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprncompComponent } from './createprncomp.component';

describe('CreateprncompComponent', () => {
  let component: CreateprncompComponent;
  let fixture: ComponentFixture<CreateprncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprncompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
