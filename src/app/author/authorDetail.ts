import { Book } from '../book/book';
import { Author } from './author';

class AuthorDetail extends Author {
  books: Book[];

  constructor(
    id: number,
    name: string,
    birthDate: Date,
    image: string,
    description: string,
    books: Book[]
  ) {
    super(id, name, birthDate, image, description);
    this.books = books;
  }
}

export { AuthorDetail };
