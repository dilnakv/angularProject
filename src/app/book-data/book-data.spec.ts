import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookData } from './book-data';

describe('BookData', () => {
  let component: BookData;
  let fixture: ComponentFixture<BookData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
