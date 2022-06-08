import React, { useReducer } from 'react';
import BooksCard from './card/BooksCard';
import useBooks from '../../apiHooks/useBooks';
import BooksFilter from './BooksFilter';
import { BooksFiltrtReducer, initialState } from './BooksFiltrtReducer';

import './Books.scss';


type PropsType = {};



const Books: React.FC<PropsType> = () => {




  const [state, dispatch] = useReducer(BooksFiltrtReducer, initialState);

  const { data, loading, error } = useBooks(state);




  return (
    <div className="books-container">
      <BooksFilter
        state={state}
        dispatch={dispatch}

      />


      <div className="cards">
        {data.books.map((item) => <BooksCard key={item.isbn13} data={item} />)}
      </div>
      {loading && "Loading..."}
      {error && "Error"}
    </div>
  )
}

export default Books;