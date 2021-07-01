import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedrvcompComponent } from './createdrvcomp.component';

describe('CreatedrvcompComponent', () => {
  let component: CreatedrvcompComponent;
  let fixture: ComponentFixture<CreatedrvcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedrvcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedrvcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
