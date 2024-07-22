import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { GenreService } from '../../services/genre.service';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {
  @Input() book!: Book;
  @Output() bookSaved = new EventEmitter<Book>();

  authors: string[] = [];

  constructor(public authorService: AuthorService) {
      this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe(response => {
      console.log(response)
      console.log(response.map(a => a.firstName + ' ' + a.lastName))
      this.authors = response.map(a => a.firstName + ' ' + a.lastName);
    });
  }

  onSave() {
    this.bookSaved.emit(this.book);
  }
}
