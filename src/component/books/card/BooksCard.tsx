import React from 'react';
import { Link } from 'react-router-dom';
import BookType from '../../../types/bookType';
import { IconButton } from '@mui/material';
import { ReactComponent as BookMark } from "../../assets/bookmark.svg"


import './BooksCard.scss';






type PropsType = {
  data: BookType
}

const BooksCard: React.FC<PropsType> = ({ data }) => {

  const handleClickMark = () => {

  }
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
        <IconButton onClick={handleClickMark}>
          <BookMark className="icon" />
        </IconButton>

      </div>


    </div>

  )
}

export default BooksCard;