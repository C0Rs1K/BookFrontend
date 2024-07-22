import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [EditBookComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  constructor(private bookService: BookService, private router: Router) {}
  book!: Book;

  OnSave($event: Book) {
    this.bookService.createBook(this.book).subscribe();
    this.router.navigate(['/books']);
  }
}
