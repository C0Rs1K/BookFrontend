import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { GetBooksParams } from '../../models/book-params';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-user-book-list',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './user-book-list.component.html',
  styleUrl: './user-book-list.component.scss'
})
export class UserBookListComponent {
  books: Book[] = [];
  totalPages: number = 1;

  constructor(private bookService: BookService) {
    this.getBooks({ pageNumber: 1});
  }

  getBooks(searchParams: GetBooksParams) {
    this.bookService.getMyBooks(searchParams).subscribe(response => {
      console.log(response);
      this.books = response.books;
      this.totalPages =response.totalPages;
    });
  }
}
