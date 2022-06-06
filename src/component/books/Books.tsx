import React, { useEffect, useState } from 'react';
import BooksCard from './card/BooksCard';
import useBooks from '../../apiHooks/useBooks';


import './Books.scss';
import Pagination from '@mui/material/Pagination';


type PropsType = {};



const Books: React.FC<PropsType> = () => {

  const { data, loading, error } = useBooks();

  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="books-container">
      <Pagination
        className="pagination"
        page={page}
        onChange={(event, value: number) => setPage(value)}
        count={3}
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