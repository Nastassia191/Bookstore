import { useEffect, useState } from 'react';
import BookType from '../types/bookType';
import useRequest from './useRequest';



const URL = "https://api.itbook.store/1.0/books/";

const useBook = (isbn13: string | undefined) => useRequest<BookType | undefined>(undefined, `${URL}/${isbn13}`);



export default useBook;