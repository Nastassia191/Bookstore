import React, { useEffect, useState } from 'react';
import BooksCard from './card/BooksCard';
import useRequest from '../../apiHooks/useRequest';
import BookType from '../../types/bookType';

import './Books.scss';

type PropsType = {};
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
const URL = "https://api.itbook.store/1.0/new";


const NewBooks: React.FC<PropsType> = () => {

  const useBooks = () => {
    const url = `${URL}`;
    return useRequest<ResponseType>(defValue, url);

  }

  const { data, loading, error } = useBooks();




  return (
    <div className="books-container">
      <div className="cards">
        {data.books.map((item) => <BooksCard key={item.isbn13} data={item} />)}
      </div>
      {loading && "Loading..."}
      {error && "Error"}
    </div>
  )
}

export default NewBooks;