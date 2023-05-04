import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorDetail } from './authorDetail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl: string = `${environment.BOOK_STORE_BASE_URL}/authors`;
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<AuthorDetail[]> {
    return this.http.get<AuthorDetail[]>(this.apiUrl);
  }

  getAuthor(id: string): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>(`${this.apiUrl}/${id}`);
  }
}
