import React from 'react';
import BookType from '../../types/bookType';
import BooksCard from './book/card/BooksCard';

import './Books.scss';


const data: BookType[] = [
  {
    "title": "Practical MongoDB",
    "subtitle": "Architecting, Developing, and Administering MongoDB",
    "isbn13": "9781484206485",
    "price": "$32.04",
    "image": "https://itbook.store/img/books/9781484206485.png",
    "url": "https://itbook.store/books/9781484206485"
  },
  {
    "title": "The Definitive Guide to MongoDB, 3rd Edition",
    "subtitle": "A complete guide to dealing with Big Data using MongoDB",
    "isbn13": "9781484211830",
    "price": "$47.11",
    "image": "https://itbook.store/img/books/9781484211830.png",
    "url": "https://itbook.store/books/9781484211830"
  },
  {
    "title": "MongoDB in Action, 2nd Edition",
    "subtitle": "Covers MongoDB version 3.0",
    "isbn13": "9781617291609",
    "price": "$32.10",
    "image": "https://itbook.store/img/books/9781617291609.png",
    "url": "https://itbook.store/books/9781617291609"
  },
];


type PropsType = {

}

const Books: React.FC<PropsType> = () => {
  return (
    <div className="books-container">
      <BooksCard data={data[0]} />
      <BooksCard data={data[1]} />
      <BooksCard data={data[2]} />
    </div>
  )
}

export default Books;