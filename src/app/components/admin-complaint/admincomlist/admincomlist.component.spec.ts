import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincomlistComponent } from './admincomlist.component';

describe('AdmincomlistComponent', () => {
  let component: AdmincomlistComponent;
  let fixture: ComponentFixture<AdmincomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincomlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
