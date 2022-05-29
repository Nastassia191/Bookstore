import React, { useEffect, useState } from 'react';
import BooksCard from './book/card/BooksCard';
//import data from './data';
import BookType from '../../types/bookType';

import './Books.scss';




type PropsType = {};

const URL = "https://api.itbook.store/1.0/new";

const Books: React.FC<PropsType> = () => {

  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(fetchData, 1000);
  }, []);




  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.books);
        const books = data.books as BookType[];
        console.log(books);
        setBooks(books);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <div className="books-container">
      {books.map((item) => <BooksCard key={item.isbn13} data={item} />)}
      {loading && "Loading..."}
      {error && "Error"}
    </div>
  )
}

export default Books;