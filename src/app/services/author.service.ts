import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private apiUrl = 'https://localhost:7130/api/Author';

  constructor(private http: HttpClient) {}

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiUrl}`, author);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}`);
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateAuthor(id: number, author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${id}`, author);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }

  getAuthorId(author: string): number | undefined{
    this.getAuthors().subscribe(response => {
      return response.find(a => (a.firstName + a.lastName) === author)
    })

    return undefined;
  }
}
