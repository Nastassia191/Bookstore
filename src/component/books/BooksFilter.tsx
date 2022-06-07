import React from 'react';
import Pagination from '@mui/material/Pagination';
import BooksFilterType from './BooksFilterType';

import './Books.scss';




type PropsType = {
  //page: number,
  filter: BooksFilterType,
  setFilter: (callback: (v: BooksFilterType) => BooksFilterType) => void
};



const BooksFilter: React.FC<PropsType> = ({ filter, setFilter }) => {



  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilter((prevValue) => ({
      ...prevValue,
      page: value,
    }));
  }



  return (
    <div className="books-container">
      <div className="pagination">
        <Pagination
          page={filter.page}
          onChange={handleChangePage}
          count={37}
        />
      </div>



    </div>
  )
}

export default BooksFilter;