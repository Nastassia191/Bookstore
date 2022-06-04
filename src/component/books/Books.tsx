import React from 'react';
import BooksCard from './card/BooksCard';
import useBooks from '../../apiHooks/useBooks';


import './Books.scss';






type PropsType = {};



const Books: React.FC<PropsType> = () => {

  const { books, loading, error } = useBooks();


  return (
    <div className="books-container">
      {books.map((item) => <BooksCard key={item.isbn13} data={item} />)}
      {loading && "Loading..."}
      {error && "Error"}
    </div>
  )
}

export default Books;