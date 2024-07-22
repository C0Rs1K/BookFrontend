import { Routes } from '@angular/router';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { AllBookListComponent } from './books/all-book-list/all-book-list.component';
import { UserBookListComponent } from './books/user-book-list/user-book-list.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';
import { AddBookComponent } from './books/add-book/add-book.component';

export const routes: Routes = [
  { path: "books", component: AllBookListComponent },
  { path: "books/:id", component: BookDetailComponent },
  { path: "myBooks", component: UserBookListComponent },
  { path: "", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "bookUpdate/:id", component: UpdateBookComponent },
  { path: "bookAdd/:id", component: AddBookComponent }
];
