import React from 'react';
import { Link } from 'react-router-dom';
import BookType from '../../../types/bookType';


import './BooksCard.scss';






type PropsType = {
  data: BookType
}

const BooksCard: React.FC<PropsType> = ({ data }) => {

  return (

    <div className="book-card-conteiner">
      <Link to={`/books/${data.isbn13}`} >
        <div className='title'>
          {data.title}
        </div>
      </Link>

      <img className="image" src={data.image} alt="#" />
      <div className='subtitle'>
        {data.subtitle}
      </div>
      <div className='price'>
        {data.price}
      </div>
    </div>

  )
}

export default BooksCard;