import React, { useEffect } from 'react';
import BooksCard from './book/card/BooksCard';
import data from './data';
import BookType from '../../types/bookType';

import './Books.scss';







type PropsType = {}

const URL = "https://api.itbook.store/1.0/";

const Books: React.FC<PropsType> = () => {
  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => (response.json))
  //     .then((data) => {
  //       const books = data.results as BookType[];
  //       console.log(books);
  //     })
  // })

  return (
    <div className="books-container">
      {data.map((item) => <BooksCard key={item.isbn13} data={item} />)}
    </div>
  )
}

export default Books;