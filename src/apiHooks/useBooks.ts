
import BookType from '../types/bookType';
import useRequest from './useRequest';



const URL = "https://api.itbook.store/1.0/search/js/";


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



const useBooks = (page: number) => {
    const url = `${URL}${page}`;
    return useRequest<ResponseType>(defValue, url);

}

export default useBooks;