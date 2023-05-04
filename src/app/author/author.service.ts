import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl: string = `${environment.BOOK_STORE_BASE_URL}/authors`;
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthor(id: string): Observable<Author> {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }
}
