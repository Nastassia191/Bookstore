import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Book from './component/book/Book';
import Books from './component/books/Books';
import Header from './component/header/Header';
import Registration from './component/registration/Registration';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App-conteiner">
        <Header />
        <div className="App-content">

          <Routes>
            <Route path='/books'  >
              <Route index element={<Books />} />
              <Route path=':isbn13' element={<Book />} />
            </Route>
            <Route path='registration' element={<Registration />} />

          </Routes>

        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
