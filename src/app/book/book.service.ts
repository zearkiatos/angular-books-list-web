import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookDetail } from './bookDetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = `${environment.BOOK_STORE_BASE_URL}/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookDetail[]> {
    return this.http.get<BookDetail[]>(this.apiUrl);
  }

  getBook(id: string): Observable<BookDetail> {
    return this.http.get<BookDetail>(`${this.apiUrl}/${id}`);
  }
}
