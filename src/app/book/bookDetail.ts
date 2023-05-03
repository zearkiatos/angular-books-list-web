import { Book } from './book';
import { Author } from '../author/author';
import { Review } from '../review/review';
import { Editorial } from '../editorial/editorial';
class BookDetail extends Book {
  authors: Array<Author> = [];
  reviews: Array<Review> = [];

  constructor(
    id: number,
    name: string,
    isbn: string,
    description: string,
    image: string,
    publishingDate: any,
    editorial: Editorial,
    authors: Author[],
    reviews: Review[]
  ) {
    super(id, name, isbn, description, image, publishingDate, editorial);
    this.authors = authors;
    this.reviews = reviews;
  }
}

export { BookDetail };
