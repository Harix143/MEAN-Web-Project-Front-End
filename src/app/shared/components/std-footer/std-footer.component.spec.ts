import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFooterComponent } from './std-footer.component';

describe('StdFooterComponent', () => {
  let component: StdFooterComponent;
  let fixture: ComponentFixture<StdFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
