import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faGraduationCap, 
    faUser, 
    faBuilding, 
    faFileContract,
    faBriefcase, 
    faCalendarAlt, 
} from '@fortawesome/free-solid-svg-icons';


const wavesEffectStyle = {
    display: 'flex',
    gap: '10px',
};

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
                                <Link to="/" className="waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faHouse} style={{ color: '#fff', fontSize: '16px' }}/> 
                                    <span>Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/cursos"  className=" waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#fff', fontSize: '16px' }}/> 
                                    <span>Cursos</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/estudantes"  className="waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faUser} style={{ color: '#fff', fontSize: '16px' }}/> 
                                    <span>Estudantes</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/empresas"  className="waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faBuilding} style={{ color: '#fff', fontSize: '16px' }}/> 
                                    <span>Empresas</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/estagio" className="waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faBriefcase} style={{ color: '#fff', fontSize: '16px' }}/> 
                                    <span>Estágio</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/contratos" className="waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faFileContract} style={{ color: '#fff', fontSize: '16px' }}/> 
                                    <span>Contratos</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/calendario" className="waves-effect" style={wavesEffectStyle}>
                                    <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#fff', fontSize: '16px' }}/> 
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