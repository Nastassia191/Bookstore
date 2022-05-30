import React from 'react';
import BookType from '../../../types/bookType';


import './BooksCard.scss';






type PropsType = {
  data: BookType
}

const BooksCard: React.FC<PropsType> = ({ data }) => {

  return (

    <div className="book-card-conteiner">
      <div className='title'>
        {data.title}
      </div>
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