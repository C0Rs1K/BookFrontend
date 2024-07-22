import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { GetBooksParams } from '../../models/book-params';
import { Book } from '../../models/book';
import { BookListComponent } from "../book-list/book-list.component";

@Component({
  selector: 'app-all-book-list',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './all-book-list.component.html',
  styleUrl: './all-book-list.component.scss'
})
export class AllBookListComponent {
  books: Book[] = [];
  totalPages: number = 1;

  constructor(private bookService: BookService) {
    this.getBooks({ pageNumber: 1});
  }

  getBooks(searchParams: GetBooksParams) {
    this.bookService.getAllBooks(searchParams).subscribe(response => {
      console.log(response);
      this.books = response.books;
      this.totalPages =response.totalPages;
    });
  }
}
