import React, { useEffect, useReducer } from 'react';
import BooksCard from './card/BooksCard';
import useBooks from '../../apiHooks/useBooks';
import BooksFilter from './BooksFilter';
import { BooksFiltrtReducer, initialState } from './BooksFiltrtReducer';

import './Books.scss';
import { useSelector } from '../hooks/UseSelector';
import { useActions } from '../hooks/useActions';
import { useParams } from 'react-router-dom';

type PropsType = {};


const Books: React.FC = () => {



  const [state, dispatch] = useReducer(BooksFiltrtReducer, initialState);

  const { data, loading, error } = useBooks(state);

  return (
    <div className="books-container">
      <div className="books-filter">
        <BooksFilter
          state={state}
          dispatch={dispatch}
        />
      </div>


      <div className="cards">
        {data.books.map((item) => <BooksCard key={item.isbn13} data={item} />)}
      </div>
      {loading && "Loading..."}
      {error && "Error"}
    </div>
  )

}

export default Books;
