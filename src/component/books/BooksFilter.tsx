import React from 'react';
import Pagination from '@mui/material/Pagination';
import BooksFilterType from './BooksFilterType';
import TextField from '../ui/textField/TextField';


import './Books.scss';





type PropsType = {
  filter: BooksFilterType,
  setFilter: (callback: (v: BooksFilterType) => BooksFilterType) => void
};



const BooksFilter: React.FC<PropsType> = ({ filter, setFilter }) => {

  const setTitle = (title: string) => {
    setFilter((prevValue) => ({
      ...prevValue,
      title
    }));
  }
  const setAuthor = (authors: string) => {
    setFilter((prevValue) => ({
      ...prevValue,
      authors
    }));
  }

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilter((prevValue) => ({
      ...prevValue,
      page: value,
    }));
  }



  return (

    <div className="books-filter">
      <TextField
        value={filter.title || filter.authors}
        setValue={setTitle || setAuthor}
      />
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