import React from 'react';
import TextField from '../ui/textField/TextField';

import './Books.scss';



type PropsType = {
  query: string,
  handleSearch: (query: string) => void;
};



const BooksFilter: React.FC<PropsType> = ({ query, handleSearch }) => {
  return (
    <div className="books-filter">
      <div className="search">
        <TextField
          label="Search"
          value={query}
          setValue={handleSearch}
        />
      </div>
    </div>
  )
}

export default BooksFilter;