import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cursos from './pages/cursos/Cursos';
import CriarCurso from './pages/cursos/CriarCurso';
import ShowCurso from './pages/cursos/ShowCurso';
import Estudantes from './pages/estudantes/Estudantes';
import Ctesp from './pages/estudantes/ctesp/Ctesp';
import RegistarStudanteCtesp from './pages/estudantes/ctesp/RegistarEstudante'
import ShowEstudanteCtesp from './pages/estudantes/ctesp/ShowEstudante'
import Licenciatura from './pages/estudantes/licenciatura/Licenciatura';
import RegistarStudanteLicenciatura from './pages/estudantes/licenciatura/RegistarEstudante'
import ShowEstudanteLicenciatura from './pages/estudantes/licenciatura/ShowEstudante'
import Mestrado from './pages/estudantes/mestrado/Mestrado';
import RegistarStudanteMestrado from './pages/estudantes/mestrado/RegistarEstudante'
import ShowEstudanteMestrado from './pages/estudantes/mestrado/ShowEstudante'
import OutrasFormacoes from './pages/estudantes/outras_formacoes/OutrasFormacoes';
import RegistarStudanteOutrasFormacoes from './pages/estudantes/outras_formacoes/RegistarEstudante'
import ShowEstudanteOutrasFormacoes from './pages/estudantes/outras_formacoes/ShowEstudante'
import Empresas from './pages/empresas/Empresas';
import RegistarEmpresa from './pages/empresas/RegistarEmpresa';
import ShowEmpresa from './pages/empresas/ShowEmpresa';
import Contratos from './pages/contratos/Contratos';
import RegistarContrato from './pages/contratos/RegistarContrato';
import ShowContrato from './pages/contratos/ShowContrato';
import Estagio from './pages/estagios/Estagio';
import RegistarEstagio from './pages/estagios/RegistarEstagio';
import ShowEstagio from './pages/estagios/ShowEstagio';
import Calendario from './pages/calendar/Calendario';
import Login from './auth/Login';
import Register from './auth/Register';
import Recover from './auth/Recover';

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
          <Route path='/cursos' element={<Cursos />}></Route>
          <Route path='/criar-curso' element={<CriarCurso />} />
          <Route path='/detalhes-curso' element={<ShowCurso />} />

          <Route path='/estudantes' element={<Estudantes />}></Route>

          <Route path='/estudantes-ctesp' element={<Ctesp />}></Route>
          <Route path='/registar-estudante-ctesp' element={<RegistarStudanteCtesp />}></Route>
          <Route path='/detalhes-estudante-ctesp' element={<ShowEstudanteCtesp />}></Route>
          
          <Route path='/estudantes-licenciatura' element={<Licenciatura />}></Route>
          <Route path='/registar-estudante-licenciatura' element={<RegistarStudanteLicenciatura />}></Route>
          <Route path='/detalhes-estudante-licenciatura' element={<ShowEstudanteLicenciatura />}></Route>

          <Route path='/estudantes-mestrado' element={<Mestrado />}></Route>
          <Route path='/registar-estudante-mestrado' element={<RegistarStudanteMestrado />}></Route>
          <Route path='/detalhes-estudante-mestrado' element={<ShowEstudanteMestrado />}></Route>

          <Route path='/estudantes-outras_formacoes' element={<OutrasFormacoes />}></Route>
          <Route path='/registar-estudante-outras_formacoes' element={<RegistarStudanteOutrasFormacoes />}></Route>
          <Route path='/detalhes-estudante-outras_formacoes' element={<ShowEstudanteOutrasFormacoes />}></Route>

          <Route path='/empresas' element={<Empresas />}></Route>
          <Route path='/registar-empresa' element={<RegistarEmpresa />}></Route>
          <Route path='/detalhes-empresa' element={<ShowEmpresa />}></Route>

          <Route path='/contratos' element={<Contratos />}></Route>
          <Route path='/registar-contrato' element={<RegistarContrato />}></Route>
          <Route path='/detalhes-contrato' element={<ShowContrato />}></Route>

          <Route path='/estagio' element={<Estagio />}></Route>
          <Route path='/registar-estagio' element={<RegistarEstagio />}></Route>
          <Route path='/detalhes-estagio' element={<ShowEstagio />}></Route>

          <Route path='/calendario' element={<Calendario />}></Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/registar' element={<Register />}></Route>
          <Route path='/recuperar_senha' element={<Recover />}></Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
