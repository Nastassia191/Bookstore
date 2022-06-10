import React from 'react';
import Pagination from '@mui/material/Pagination';
import BooksFilterType from './BooksFilterTypes';
import TextField from '../ui/textField/TextField';
import { setAuthors, setPage, setTitle, setTotal } from './BooksFilterActionCreators';


import './Books.scss';






type PropsType = {
  state: BooksFilterType,
  dispatch: any,

};



const BooksFilter: React.FC<PropsType> = ({ state, dispatch }) => {

  const updateTitle = (value: string) => {
    dispatch(setTitle(value));
  }

  const setAuthor = (value: string) => {
    dispatch(setAuthors(value));
  }
  const setTotals = (value: string) => {
    dispatch(setTotal(value));
  }



  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  }



  return (

    <div className="books-filter">
      <TextField
        value={state.title || state.authors}
        setValue={updateTitle || setAuthor}
      />
      <div className="pagination">
        <Pagination
          page={state.page}
          onChange={handleChangePage}
          count={37}
        />
      </div>


    </div>

  )
}

export default BooksFilter;