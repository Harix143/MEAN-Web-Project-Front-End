import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeeComponent } from './listfee.component';

describe('ListfeeComponent', () => {
  let component: ListfeeComponent;
  let fixture: ComponentFixture<ListfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
