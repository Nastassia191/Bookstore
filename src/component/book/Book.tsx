import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Star } from "../assets/star.svg";
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/UseSelector';

import './Book.scss';



const Book: React.FC = () => {


  const { isbn13 } = useParams();

  const data = useSelector(state => state.book.data);
  const loading = useSelector(state => state.book.loading);
  const error = useSelector(state => state.book.error);

  const { fetchBook } = useActions();


  useEffect(() => {
    fetchBook(isbn13);
  }, [isbn13]);



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
      <div className="book-for-card-conteiner">
        <div className="book-card-image">
          <img className="image" src={data.image} alt="" />
        </div>
        <div className='book-card-about'>
          <div className='title'>
            {data.title}
          </div>

          <div className='authors'>
            Author: {data.authors}
          </div>
          <div className='price'>
            {data.price}
          </div>
          <div className='subtitle'>
            {data.subtitle}
          </div>
          <div className='desc'>
            {data.desc}
          </div>
          <div className='publisher'>
            Publisher: {data.publisher}
          </div>
          <div className='year'>
            Year: {data.year}
          </div>
          <div className='rating'>
            Rating: <Star className="rating-star" />{data.rating}
          </div>
        </div>
      </div>
    )
  }
  return null;
}


export default Book;