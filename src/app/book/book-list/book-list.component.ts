import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookDetail } from '../bookDetail';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [];
  selected: Boolean = false;
  selectedBook!: BookDetail;

  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  onSelected(book: Book): void {
    this.selected = true;
    this.selectedBook = book as BookDetail;
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
