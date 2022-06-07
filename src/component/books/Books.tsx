import React, { useState } from 'react';
import BooksCard from './card/BooksCard';
import useBooks from '../../apiHooks/useBooks';
import BooksFilter from './BooksFilter';
import BooksFilterType from './BooksFilterType';


import './Books.scss';

type PropsType = {};



const Books: React.FC<PropsType> = () => {


  const [filter, setFilter] = useState<BooksFilterType>({
    page: 1,
  });
  const { data, loading, error } = useBooks(filter);




  return (
    <div className="books-container">
      <BooksFilter
        filter={filter}
        setFilter={setFilter}
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