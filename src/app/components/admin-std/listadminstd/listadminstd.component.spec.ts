import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadminstdComponent } from './listadminstd.component';

describe('ListadminstdComponent', () => {
  let component: ListadminstdComponent;
  let fixture: ComponentFixture<ListadminstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadminstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadminstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
