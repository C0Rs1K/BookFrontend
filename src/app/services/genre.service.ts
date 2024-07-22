import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiUrl = 'https://localhost:7130/api/Genre';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
