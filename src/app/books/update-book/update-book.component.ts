import { Component } from '@angular/core';
import { EditBookComponent } from "../edit-book/edit-book.component";
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [EditBookComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.scss'
})
export class UpdateBookComponent {

  constructor(private bookService: BookService, private router: Router) {}
  book!: Book;

  OnSave($event: Book) {
    this.bookService.updateBook(this.book.id, this.book).subscribe();
    this.router.navigate(['/books']);
  }
}
