import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprncompComponent } from './listprncomp.component';

describe('ListprncompComponent', () => {
  let component: ListprncompComponent;
  let fixture: ComponentFixture<ListprncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprncompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
