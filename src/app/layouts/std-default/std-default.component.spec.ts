import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDefaultComponent } from './std-default.component';

describe('StdDefaultComponent', () => {
  let component: StdDefaultComponent;
  let fixture: ComponentFixture<StdDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
