import React from 'react';
import Pagination from '@mui/material/Pagination';

import './Books.scss';


type PropsType = {
  page: number,
  total: number,
  handlePagination: (page: number) => void;
};



const BooksPagination: React.FC<PropsType> = ({ page, total, handlePagination }) => {


  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    handlePagination(value);
  }

  const pageCount = Math.ceil(total / 10);

  return (
    <div className="pagination">
      <Pagination
        page={page}
        onChange={handleChangePage}
        count={Math.min(pageCount, 100)}
      />
    </div>
  )
}

export default BooksPagination;