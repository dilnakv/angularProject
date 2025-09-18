import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewchildren } from './employee-viewchildren';

describe('EmployeeViewchildren', () => {
  let component: EmployeeViewchildren;
  let fixture: ComponentFixture<EmployeeViewchildren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeViewchildren]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewchildren);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
