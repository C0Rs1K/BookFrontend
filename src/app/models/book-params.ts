export interface GetBooksParams {
  title?: string;
  genre?: string;
  authorId?: number;
  pageNumber: number;
  pageSize?: number;
}
