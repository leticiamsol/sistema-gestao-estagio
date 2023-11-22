import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBuilding, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import BarChart from '../components/BarGraph';


function Home() 
{
    return (
       
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">HOME</h4>

                            </div>
                        </div>
                    </div>

                    <div className='' style={{ display:'flex', gap:20 }}>
                        <div className="column" style={{ flex:1 }}>
                            <div >
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="text-truncate font-size-14 mb-2">Alunos</p>
                                                <h4 className="mb-2">1452</h4>

                                                <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                                
                                                <p className="text-muted mb-0"><span className="text-success fw-bold font-size-12 me-2"><i className="ri-arrow-right-up-line me-1 align-middle"></i>9.23%</span>better</p>
                                            </div>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-light text-primary rounded-3">
                                                    <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#B5121B', fontSize: '22px' }}/>
                                                </span>
                                            </div>
                                        </div>                                            
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="text-truncate font-size-14 mb-2">Empresas</p>
                                                <h4 className="mb-2">938</h4>

                                                <p style={{ visibility : 'hidden' }}>sdcsdc</p>
                                                
                                                <p className="text-muted mb-0"><span className="text-danger fw-bold font-size-12 me-2"><i className="ri-arrow-right-down-line me-1 align-middle"></i>1.09%</span>worse</p>
                                            </div>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-light text-success rounded-3">
                                                    <FontAwesomeIcon icon={faBuilding} style={{ color: '#B5121B', fontSize: '22px' }} />
                                                </span>
                                            </div>
                                        </div>                                              
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="text-truncate font-size-14 mb-2">Estágios</p>
                                                <h4 className="mb-2">8246</h4>

                                                <p style={{ visibility : 'hidden' }}>sdcsdc</p>

                                                <p className="text-muted mb-0"><span className="text-success fw-bold font-size-12 me-2"><i className="ri-arrow-right-up-line me-1 align-middle"></i>16.2%</span>better</p>
                                                
                                            </div>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-light text-primary rounded-3">
                                                <FontAwesomeIcon icon={faChalkboardUser} style={{ color: '#B5121B', fontSize: '22px' }}/>
                                                </span>
                                            </div>
                                        </div>                                              
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="card"  style={{ flex:1 }}>
                            <BarChart />
                        </div>
                    </div>

                </div>
            </div>
        </div>
  
    )
}

export default Home;