import React, { useEffect, useState } from 'react';
import BooksCard from './card/BooksCard';
import { useSelector } from '../hooks/UseSelector';
import { useActions } from '../hooks/useActions';
import BooksPagination from './BooksPagination';
import BooksFilter from './BooksFilter';


import './Books.scss';



const Books: React.FC = () => {

  const data = useSelector(state => state.books.data);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);
  const total = useSelector(state => state.books.total);


  const { fetchBooks } = useActions();

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const handlePages = (updatedPage: number) => setPage(updatedPage);
  const handleSearch = (updatedQuery: string) => {
    setQuery(updatedQuery);
    setPage(1);
  };

  useEffect(() => {
    fetchBooks(page, query);
  }, [page, query]);

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
        <div className="books-filter">
          <div className="books-filter_pagination">
            <BooksPagination
              page={page}
              total={total}
              handlePagination={handlePages}
            />
          </div>
          <div className="books-filter_serch">
            <BooksFilter
              query={query}
              handleSearch={handleSearch}
            />
          </div>

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



export default Books;
