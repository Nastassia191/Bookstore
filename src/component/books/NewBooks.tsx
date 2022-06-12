// import React, { useEffect, useState } from 'react';
import BooksCard from './card/BooksCard';
// import useRequest from '../../apiHooks/useRequest';
// import BookType from '../../types/bookType';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Star } from "../assets/star.svg";
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/UseSelector';

import './Books.scss';

// type PropsType = {};
// type ResponseType = {
//   error: string,
//   total?: string,
//   page?: string,
//   books: BookType[],
// }
// const defValue: ResponseType = {
//   error: "0",
//   books: [],
// }
// const URL = "https://api.itbook.store/1.0/new";

const NewBooks: React.FC = () => {

  // const useBooks = () => {
  //   const url = `${URL}`;
  //   return useRequest<ResponseType>(defValue, url);

  // }

  // const { data, loading, error } = useBooks();
  const data = useSelector(state => state.newBooks.data);
  const loading = useSelector(state => state.newBooks.loading);
  const error = useSelector(state => state.newBooks.error);


  const { fetchNewBooks } = useActions();


  useEffect(() => {
    fetchNewBooks();
    console.log(data);
  }, []);



  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  } else if (error) {
    return (
      <div>
        Error...
      </div>
    )
  } else if (data) {


    return (
      <div className="books-container">
        <div className="cards">
          {data.map((item) => <BooksCard key={item.isbn13} data={item} />)}
        </div>
        {loading && "Loading..."}
        {error && "Error"}
      </div>
    )
  }
  return null;

}

export default NewBooks;
