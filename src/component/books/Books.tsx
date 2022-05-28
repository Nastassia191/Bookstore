import React, { useEffect, useState } from 'react';
import BooksCard from './book/card/BooksCard';
//import data from './data';
import BookType from '../../types/bookType';

import './Books.scss';




type PropsType = {};

const URL = "https://api.itbook.store/1.0/new";

const Books: React.FC<PropsType> = () => {

  const [books, setBooks] = useState<BookType[]>([]);



  useEffect(() => {

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.books);
        const books = data.books;
        console.log(books);
        setBooks(books);
      })
  }, []);

  return (
    <div className="books-container">
      {books.map((item) => <BooksCard key={item.isbn13} data={item} />)}
    </div>
  )
}

export default Books;