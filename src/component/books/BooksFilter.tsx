import React from 'react';
import Button from '../ui/button/Button';
import TextField from '../ui/textField/TextField';

import './Books.scss';



type PropsType = {
  query: string,
  handleSearch: (query: string) => void,
  handleQuery: (query: string) => void,
};



const BooksFilter: React.FC<PropsType> = ({ query, handleSearch, handleQuery }) => {
  // const handleQuery = () => {
  //   (query);
  // }
  return (
    <div className="books-filter">
      <div className="search">
        <TextField
          value={query}
          setValue={handleQuery}
        />
      </div>
      <div className="button_search">
        <Button onClick={() => handleSearch(query)}>
          Search
        </Button>
      </div>
    </div>
  )
}

export default BooksFilter;