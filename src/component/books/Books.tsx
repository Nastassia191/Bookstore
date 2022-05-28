import React, { useEffect, useState } from 'react';
import BooksCard from './book/card/BooksCard';
import data from './data';
import BookType from '../../types/bookType';

import './Books.scss';




type PropsType = {};

const URL = "https://api.itbook.store/1.0/";

const Books: React.FC<PropsType> = () => {

  const [books, setBooks] = useState<BookType[]>([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const books = data.results as BookType[];
        setBooks(books);
        console.log(books);
      })
  }, []);

  return (
    <div className="books-container">
      {data.map((item) => <BooksCard key={item.isbn13} data={item} />)}
    </div>
  )
}

export default Books;