import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdrvcompComponent } from './listdrvcomp.component';

describe('ListdrvcompComponent', () => {
  let component: ListdrvcompComponent;
  let fixture: ComponentFixture<ListdrvcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdrvcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdrvcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
