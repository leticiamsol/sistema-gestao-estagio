import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar()
{
    return (
        <div>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">

                    <div id="sidebar-menu">
                        
                        <ul className="metismenu list-unstyled" id="side-menu">

                            <li style={{visibility : 'hidden'}}><Link to="/">Home</Link></li>

                            <li>
                                <Link to="/" className="waves-effect">
                                    <i className="ri-dashboard-line"></i><span className="badge rounded-pill bg-success float-end">3</span>
                                    <span>Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/cursos"  className=" waves-effect">
                                    <i className="ri-calendar-2-line"></i>
                                    <span>Cursos</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/alunos"  className=" waves-effect">
                                    <i className="ri-calendar-2-line"></i>
                                    <span>Alunos</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/empresas"className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span>Empresas</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/contratos"className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span>Contratos</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/estagio" className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span>Estágio</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/calendario" className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span>Calendário</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                   
                </div>
            </div>
         
        </div>
    )
}

export default Sidebar;