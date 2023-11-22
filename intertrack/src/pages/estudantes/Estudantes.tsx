import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const btnAdd = {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
}

function Estudantes() 
{
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Estudantes</h4>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate font-size-14 mb-2">CTesp</p>
                                            <h4 className="mb-2">1452</h4>

                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                            
                                            <Link to={"/estudantes-ctesp"}>
                                                <button className='btn btn-danger' style={btnAdd}>Ver Detalhes</button>
                                            </Link>
                                        </div>
                                        <div className="avatar-sm">
                                            <span className="avatar-title bg-light text-primary rounded-3">
                                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#B5121B', fontSize: '20px' }}/>  
                                            </span>
                                        </div> 
                                    </div>                                            
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-xl-6 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate font-size-14 mb-2">Licenciatura</p>
                                            <h4 className="mb-2">938</h4>

                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                            
                                            <Link to={"/estudantes-licenciatura"}>
                                                <button className='btn btn-danger' style={btnAdd}>Ver Detalhes</button>
                                            </Link>
                                        </div>
                                        <div className="avatar-sm">
                                            <span className="avatar-title bg-light text-success rounded-3">
                                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#B5121B', fontSize: '20px' }}/> 
                                            </span>
                                        </div>
                                    </div>                                              
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate font-size-14 mb-2">Mestrado</p>
                                            <h4 className="mb-2">8246</h4>

                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>

                                            <Link to={"/estudantes-mestrado"}>
                                                <button className='btn btn-danger' style={btnAdd}>Ver Detalhes</button>
                                            </Link>
                                            
                                        </div>
                                        <div className="avatar-sm">
                                            <span className="avatar-title bg-light text-primary rounded-3">
                                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#B5121B', fontSize: '20px' }}/> 
                                            </span>
                                        </div>
                                    </div>                                              
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <p className="text-truncate font-size-14 mb-2">Formações Especializadas</p>
                                            <h4 className="mb-2">8246</h4>

                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                            <p style={{ visibility : 'hidden' }}>sdcsdc</p>

                                            <Link to={"/estudantes-outras_formacoes"}>
                                                <button className='btn btn-danger' style={btnAdd}>Ver Detalhes</button>
                                            </Link>
                                            
                                        </div>
                                        <div className="avatar-sm">
                                            <span className="avatar-title bg-light text-primary rounded-3">
                                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#B5121B', fontSize: '20px' }}/>  
                                            </span>
                                        </div>
                                    </div>                                              
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Estudantes;