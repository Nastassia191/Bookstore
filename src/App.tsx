import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Book from './component/book/Book';
import Books from './component/books/Books';
import Header from './component/header/Header';
import Registration from './component/registration/Registration';


const App: React.FC = () => {
  return (
    // <BrowserRouter>
    //   <div className="App-conteiner">
    //     <Header />
    //   </div>
    //   <Routes>
    //     <Route path='/' element={<Books />} />
    //   </Routes>

    // </BrowserRouter>
    <div className="App-conteiner">
      <Header />
      <Books />
      <Registration />
      <Book isbn13="9781617294136" />
    </div>

  );
}

export default App;
