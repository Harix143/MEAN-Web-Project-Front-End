import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesNavbarComponent } from './routes-navbar.component';

describe('RoutesNavbarComponent', () => {
  let component: RoutesNavbarComponent;
  let fixture: ComponentFixture<RoutesNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
