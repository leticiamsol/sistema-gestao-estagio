import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Recover from './pages/auth/Recover';
import './App.css';

function App() {

  return (
    <BrowserRouter>

      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/registar' element={<Register />}></Route>
          <Route path='/recuperar_senha' element={<Recover />}></Route>

      </Routes>
      
    </BrowserRouter>
  );

}

export default App;
