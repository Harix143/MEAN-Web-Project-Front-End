import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSidebarComponent } from './std-sidebar.component';

describe('StdSidebarComponent', () => {
  let component: StdSidebarComponent;
  let fixture: ComponentFixture<StdSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
