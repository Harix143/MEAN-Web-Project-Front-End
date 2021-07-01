import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstdcompComponent } from './liststdcomp.component';

describe('ListstdcompComponent', () => {
  let component: ListstdcompComponent;
  let fixture: ComponentFixture<ListstdcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstdcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstdcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
