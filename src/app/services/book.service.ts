import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { GetBooksParams } from '../models/book-params';
import { BookSearch } from '../models/bookSearch';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'https://localhost:7130/api/Book';

  constructor(private http: HttpClient) {}

  takeBook(id: number): Observable<Book> {
    throw new Error('Method not implemented.');
  }

  getAllBooks(params: GetBooksParams): Observable<BookSearch> {
    let httpParams = new HttpParams();

    Object.keys(params).forEach(key => {
      const property = params[key as keyof GetBooksParams]
      if (property) {
        httpParams = httpParams.set(key, property.toString());
      }
    });

    return this.http.get<BookSearch>(this.apiUrl, { params: httpParams });
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  getMyBooks(params: GetBooksParams): Observable<BookSearch> {
    let httpParams = new HttpParams();

    Object.keys(params).forEach(key => {
      const property = params[key as keyof GetBooksParams]
      if (property) {
        httpParams = httpParams.set(key, property.toString());
      }
    });

    return this.http.get<BookSearch>(`${this.apiUrl}/MyBooks`, { params: httpParams });
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
