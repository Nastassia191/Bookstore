
import BooksFilterType from '../component/books/BooksFilterTypes';
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



const useBooks = ({ page, title, authors, total }: BooksFilterType) => {

    let url = `${URL}js/${page}`;

    if (title) {
        url = `${URL}${title}`;
    }
    if (authors) {
        url = `${URL}${authors}`;
    }

    return useRequest<ResponseType>(defValue, url);
}

export default useBooks;