import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookType from '../../types/bookType';

import './Book.scss';




const URL = "https://api.itbook.store/1.0/books/"


const Book: React.FC = () => {
  const [book, setBook] = useState<BookType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isbn13 } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(`${URL}${isbn13}`)
        .then((response) => response.json())
        .then((data) => {
          const book = data as BookType;
          setBook(book);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
    }, 0);
  }

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