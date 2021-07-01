import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrvSidebarComponent } from './drv-sidebar.component';

describe('DrvSidebarComponent', () => {
  let component: DrvSidebarComponent;
  let fixture: ComponentFixture<DrvSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrvSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrvSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
