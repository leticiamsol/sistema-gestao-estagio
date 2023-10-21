    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Sidebar from './components/Sidebar';
    import Home from './pages/Home';
    import Cursos from './pages/Cursos';
    import Alunos from './pages/Alunos';
    import Empresas from './pages/Empresas';
    import Estagio from './pages/Estagio';
    import Calendario from './pages/Calendario';

    function App() 
    {
        return(
            <div>

                <Header />
                <Sidebar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cursos' element={<Cursos />} />
                    <Route path='/alunos' element={<Alunos />} />
                    <Route path='/empresas' element={<Empresas />} />
                    <Route path='/estagio' element={<Estagio />} />
                    <Route path='/calendario' element={<Calendario />} />

                </Routes>

            </div>
        )
    }

    export default App();