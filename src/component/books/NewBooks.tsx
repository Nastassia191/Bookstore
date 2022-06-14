import React, { useEffect } from 'react';
import BooksCard from './card/BooksCard';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/UseSelector';

import './Books.scss';



const NewBooks: React.FC = () => {


  const data = useSelector(state => state.newBooks.data);
  const loading = useSelector(state => state.newBooks.loading);
  const error = useSelector(state => state.newBooks.error);


  const { fetchNewBooks } = useActions();


  useEffect(() => {
    fetchNewBooks();
  }, []);



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
      <div className="books-container">
        <div className="title-newBook">
          <h3>
            NEW BOOKS
          </h3>
        </div>


        <div className="cards">
          {data.map((item) => <BooksCard key={item.isbn13} data={item} />)}
        </div>
        {loading && "Loading..."}
        {error && "Error"}
      </div>
    )
  }
  return null;

}

export default NewBooks;
