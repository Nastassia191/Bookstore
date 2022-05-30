import React, { useState } from 'react';
import BookType from '../../types/bookType';

import './Book.scss';

type PropsType = {
  isbn13: string,
}

const data: BookType = {
  "error": "0",
  "title": "Securing DevOps",
  "subtitle": "Security in the Cloud",
  "authors": "Julien Vehent",
  "publisher": "Manning",
  "isbn10": "1617294136",
  "isbn13": "9781617294136",
  "pages": "384",
  "year": "2018",
  "rating": "5",
  "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
  "price": "$26.98",
  "image": "https://itbook.store/img/books/9781617294136.png",
  "url": "https://itbook.store/books/9781617294136",
  "pdf": {
    "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
    "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
  }
}

const URL = "https://api.itbook.store/1.0/books/"


const Book: React.FC<PropsType> = ({ isbn13 }) => {



  return (
    <div className="book-for-card-conteiner">
      <div className="book-card-image">
        <img className="image" src={data.image} alt="#" />
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
          Rating: {data.rating}
        </div>
      </div>
    </div>
  )
}

export default Book;