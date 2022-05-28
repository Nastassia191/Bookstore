import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Books from './component/books/Books';
import Header from './component/header/Header';


const App: React.FC = () => {
  return (
    // <BrowserRouter>
    //   <div className="App-conteiner">
    //     <Header />
    //   </div>
    //   <Routes>
    //     <Route path='/books' element={<Books />} />
    //   </Routes>

    // </BrowserRouter>
    <div className="App-conteiner">
      <Header />
      <Books />
    </div>

  );
}

export default App;
