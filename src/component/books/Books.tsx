import React, { useEffect, useState } from 'react';
import BooksCard from './card/BooksCard';
import useBooks from '../../apiHooks/useBooks';
import Pagination from '@mui/material/Pagination';

import './Books.scss';



type PropsType = {};



const Books: React.FC<PropsType> = () => {


  const [page, setPage] = useState(1);
  const { data, loading, error } = useBooks(page);




  return (
    <div className="books-container">
      <div className="pagination">
        <Pagination
          page={page}
          onChange={(event, value: number) => setPage(value)}
          count={37}
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