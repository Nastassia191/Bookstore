
import BookType from '../types/bookType';
import useRequest from './useRequest';


const URL = "https://api.itbook.store/1.0/new";

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


const useBooks = () => useRequest<ResponseType>(defValue, URL);



export default useBooks;