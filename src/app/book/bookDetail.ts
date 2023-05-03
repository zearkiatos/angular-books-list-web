import { Book } from './book';
import { Author } from '../author/author';
import { Review } from '../review/review';
class BookDetail extends Book {
  authors: Array<Author> = [];
  reviews: Array<Review> = [];
}

export { BookDetail };
