import { Book } from '../book/book';
export class Editorial {
  id: number;
  name: string;
  books: Book[];

  constructor(id: number, name: string, books: Book[]) {
    this.id = id;
    this.name = name;
    this.books = books;
  }
}
