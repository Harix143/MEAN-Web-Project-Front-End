import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadminprnComponent } from './listadminprn.component';

describe('ListadminprnComponent', () => {
  let component: ListadminprnComponent;
  let fixture: ComponentFixture<ListadminprnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadminprnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadminprnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
