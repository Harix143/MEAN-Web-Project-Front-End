import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadminstdComponent } from './createadminstd.component';

describe('CreateadminstdComponent', () => {
  let component: CreateadminstdComponent;
  let fixture: ComponentFixture<CreateadminstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateadminstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadminstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
