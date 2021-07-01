import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstdschComponent } from './liststdsch.component';

describe('ListstdschComponent', () => {
  let component: ListstdschComponent;
  let fixture: ComponentFixture<ListstdschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstdschComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstdschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
