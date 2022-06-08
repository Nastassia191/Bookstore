
import BooksFilterType from '../component/books/BooksFilterType';
import BookType from '../types/bookType';
import useRequest from './useRequest';



const URL = "https://api.itbook.store/1.0/search/";


type ResponseType = {
  error: string,
  total?: string,
  page?: string,
  books: BookType[],
}

const defValue: ResponseType = {
  error: "0",
  books: [],
}



const useSearchBooks = ({ title, authors }: BooksFilterType) => {

  let url = `${URL}`;

  if (title) {
    url += `${title}`;
  }
  if (authors) {
    url += `${authors}`;
  }

  return useRequest<ResponseType>(defValue, url);
}

export default useSearchBooks;