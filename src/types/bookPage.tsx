import BookType from "./bookType";

type BookPage = {
  error: string,
  total: string,
  page: string,
  books: BookType[],
}


export default BookPage;