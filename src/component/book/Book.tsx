import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBook from '../../apiHooks/useBook';

import './Book.scss';




const Book: React.FC = () => {


  const { isbn13 } = useParams();

  const { book, loading, error } = useBook(isbn13);



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
  } else if (book) {
    return (
      <div className="book-for-card-conteiner">
        <div className="book-card-image">
          <img className="image" src={book.image} alt="" />
        </div>
        <div className='book-card-about'>
          <div className='title'>
            {book.title}
          </div>

          <div className='authors'>
            Author: {book.authors}
          </div>
          <div className='price'>
            {book.price}
          </div>
          <div className='subtitle'>
            {book.subtitle}
          </div>
          <div className='desc'>
            {book.desc}
          </div>
          <div className='publisher'>
            Publisher: {book.publisher}
          </div>
          <div className='year'>
            Year: {book.year}
          </div>
          <div className='rating'>
            Rating: {book.rating}
          </div>
        </div>
      </div>
    )
  }
  return null;
}


export default Book;