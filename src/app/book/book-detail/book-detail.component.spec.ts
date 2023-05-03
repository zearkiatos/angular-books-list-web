/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Editorial } from 'src/app/editorial/editorial';
import { Author } from 'src/app/author/author';
import { Review } from 'src/app/review/review';

import { BookDetailComponent } from './book-detail.component';
import { BookService } from '../book.service';
import { BookDetail } from '../bookDetail';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BookDetailComponent],
      providers: [BookService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    const editorial = new Editorial(
      faker.datatype.number(),
      faker.lorem.sentence()
    );

    const authors: Author[] = [];
    const reviews: Review[] = [];
    for (let i = 0; i < 3; i++) {
      const author = new Author(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.date.birthdate(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      authors.push(author);
    }

    for (let i = 0; i < 3; i++) {
      const review = new Review(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.name.firstName(),
        faker.lorem.sentence(),
      );
      reviews.push(review);
    }
    component.bookDetail = new BookDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past(),
      editorial,
      authors,
      reviews
    );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with bookDetail.name', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.bookDetail.name);
  });

  it('should have an img element with src= bookDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.bookDetail.image
    );
  });

  it('should have an img element with alt= bookDetail.name', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.bookDetail.name
    );
  });

  it('should have 3 <dd> elements', () => {
    expect(debug.queryAll(By.css('dl>dd.caption'))).toHaveSize(3);
  });

  it('should have one dd tag for component.bookDetail.isbn', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'ISBN';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.isbn);
  });

  it('should have one dd tag for component.bookDetail.publishingDate', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Publishing Date';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.publishingDate);
  });

  it('should have one dd tag for component.bookDetail.editorial.name', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Editorial';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.editorial.name);
  });

  it('should have 3 <dd> elements of reviews', () => {
    expect(debug.queryAll(By.css('div.col>p'))).toHaveSize(3);
  });
});
