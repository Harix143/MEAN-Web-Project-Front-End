import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincomviewComponent } from './admincomview.component';

describe('AdmincomviewComponent', () => {
  let component: AdmincomviewComponent;
  let fixture: ComponentFixture<AdmincomviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincomviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincomviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
