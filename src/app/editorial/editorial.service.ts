import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from './editorial';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
private apiUrl: string = `${environment.BOOK_STORE_BASE_URL}/editorials`;

constructor(private http: HttpClient) { }

getEditorials():Observable<Editorial[]> {
  return this.http.get<Editorial[]>(this.apiUrl);
}

}

