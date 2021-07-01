import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnSidebarComponent } from './prn-sidebar.component';

describe('PrnSidebarComponent', () => {
  let component: PrnSidebarComponent;
  let fixture: ComponentFixture<PrnSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrnSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrnSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
