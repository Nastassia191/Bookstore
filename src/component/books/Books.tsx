import React, { useEffect, useReducer } from 'react';
import BooksCard from './card/BooksCard';
import { useSelector } from '../hooks/UseSelector';
import { useActions } from '../hooks/useActions';
import { useParams } from 'react-router-dom';
import BooksFilter from './BooksFilter';



import './Books.scss';



const Books: React.FC = () => {

  const { title, authors, page } = useParams();

  // const [state, dispatch] = useReducer(BooksFiltrtReducer, initialState);

  // const { data, loading, error } = useBooks(state);
  const data = useSelector(state => state.books.data);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  const { fetchBooks } = useActions();

  // useEffect(() => {
  //   fetchBooks(page, title, authors);
  // }, [title, authors, page]);

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
        {/* <BooksFilter
        // state={state}
        // dispatch={dispatch}

        /> */}

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



export default Books;
