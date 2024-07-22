import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Input() genres!: string[];
  @Input() authors!: string[];

  selectedGenre = '';
  selectedAuthor = '';

  @Output() filter = new EventEmitter<{ genre: string; author: string }>();

  onFilter() {
    this.filter.emit({ genre: this.selectedGenre, author: this.selectedAuthor });
  }
}
