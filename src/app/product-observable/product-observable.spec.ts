import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductObservable } from './product-observable';

describe('ProductObservable', () => {
  let component: ProductObservable;
  let fixture: ComponentFixture<ProductObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
