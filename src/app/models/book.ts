export interface Book {
  id: number;
  isbn: string;
  name: string;
  genre: string;
  description: string;
  authorId: number;
  takeTime: string | undefined;
  returnTime: string | undefined;
  bookOwner: string ;
  imagePath: string;
}
