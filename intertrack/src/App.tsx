import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cursos from './pages/cursos/Cursos';
import Alunos from './pages/Alunos';
import Empresas from './pages/Empresas';
import Estagio from './pages/Estagio';
import Calendario from './pages/Calendario';
import Contratos from './pages/Contratos';
import './App.css';
import './css/Bootstrap.min.css';
import './css/App.min.css';
import './css/Style.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Sidebar />

      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cursos' element={<Cursos />} ></Route>
          <Route path='/alunos' element={<Alunos />}></Route>
          <Route path='/empresas' element={<Empresas />}></Route>
          <Route path='/contratos' element={<Contratos />}></Route>
          <Route path='/estagio' element={<Estagio />}></Route>
          <Route path='/calendario' element={<Calendario />}></Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
