import { Book } from "./book"

export interface BookSearch {
  books: Book[]
  totalPages: number
}
