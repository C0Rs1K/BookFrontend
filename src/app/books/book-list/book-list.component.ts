import { GenreService } from './../../services/genre.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of, map, catchError } from 'rxjs';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { GetBooksParams } from '../../models/book-params';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from "../book-card/book-card.component";
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { FiltersComponent } from '../../shared/filters/filters.component';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FiltersComponent, BookCardComponent, PaginationComponent ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() books!: Book[];
  @Input() totalPages!: number;
  authors: string[] = [];
  genres: string[] = [];

  searchParams: GetBooksParams = { pageNumber: 1};

  @Output() bookChanged = new EventEmitter<GetBooksParams>();

  constructor(private genreService: GenreService, private authorService: AuthorService) {
    this.getAuthors();
    this.getGenres();
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe(response => {
      this.authors = response.map(a => a.firstName + ' ' + a.lastName);
    })
  }

  getGenres() {
    this.genreService.getGenres().subscribe(response => {
      this.genres = response;
    });
  }

  onFilter(filters: { genre: string; author: string }) {
    this.searchParams.genre = filters.genre;
    this.searchParams.authorId = this.authorService.getAuthorId(filters.author);
    this.searchParams.pageNumber = 1;
    this.bookChanged.emit(this.searchParams);
  }

  onPageChange(page: number) {
    this.searchParams.pageNumber = page;
    this.bookChanged.emit(this.searchParams);
  }

  onSearch() {
    this.searchParams.pageNumber = 1;

    this.bookChanged.emit(this.searchParams);
  }
}
