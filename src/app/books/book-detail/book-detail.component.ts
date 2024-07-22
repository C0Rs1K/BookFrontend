import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  book!: Book;
  isAdmin = true;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(+id!).subscribe(response => {
      this.book = response;
    });
  }

  isAvailable(): boolean {
    return !this.book.takeTime;
  }

  takeBook() {
    if (this.isAvailable()) {
      this.bookService.takeBook(this.book.id).subscribe(response => {
        this.router.navigate(['/books']);
      });
    }
  }

  editBook() {
    this.router.navigate(['/updateBook', this.book.id]);
  }

  deleteBook() {
    if (confirm('Вы уверены, что хотите удалить эту книгу?')) {
      this.bookService.deleteBook(this.book.id).subscribe(response => {
        this.router.navigate(['/books']);
      });
    }
  }
}
