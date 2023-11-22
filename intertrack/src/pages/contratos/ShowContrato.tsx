import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const backGround = {
    background: '#FFFFFF',
    borderRadius: '7px',
    margin: '4px 12px',
    boxShadow: '3px 6px 17px rgba(23,23,36,.1);'
}

const btnAdd = {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
}

const alignDiv = {
    display: 'flex',
    alingItem: 'center',
    gap: '10px',
}

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const descriptionDisplay: {
  display: string;
  flexDirection: FlexDirection;
  gap: number;
} = {
  display: 'flex',
  flexDirection: 'column',
  gap: 5
};


const optional = {
    color: '#c9cbcc',
    fontSize: 14
}


function ShowEmpresa() 
{
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0" style={alignDiv}>
                                        <li><Link to="/contratos" style={{ color: '#6d757d', marginLeft: '3px' }} className='curso-link'>Voltar</Link></li>
                                        <li>
                                            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#6D757D', fontSize: '12px' }}/>
                                        </li>
                                        <li className="breadcrumb-item active">Atualizar Contrato</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <form method="" action="" className="row">
                            
                        <div className="card-body" id="form-table" style={backGround}>

                            <h4 className="mb-sm-0">Atualizar Contrato</h4>

                            <div className="row mb-3">
                                <label htmlFor="tipo-refeicao-input" className="col-sm-2 col-form-label">Estudante</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='estudante_id' id="ingredientes-input" disabled>
                                        <option value="">Selecionar</option>   
                                        <option value="Estudante 1">Estudante 1</option>   
                                        <option value="Estudante 2">Estudante 2</option>   
                                        <option value="Estudante 3">Estudante 3</option>   
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="descricao-input" className="col-sm-2 col-form-label">Empresa</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='empresa_id' id="ingredientes-input" disabled>
                                        <option value="">Selecionar</option>   
                                        <option value="Empresa 1">Empresa 1</option>   
                                        <option value="Empresa 2">Empresa 2</option>   
                                        <option value="Empresa 3">Empresa 3</option>    
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="nome-input" className="col-sm-2 col-form-label">Início</label>
                                <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="date" 
                                    name='data_inicio'
                                    id="nome-input"
                                    disabled
                                />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="nome-input" className="col-sm-2 col-form-label">Fim</label>
                                <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="date" 
                                    name='data_fim'
                                    id="nome-input"
                                    disabled
                                />
                                </div>
                            </div>

                            <input
                                type="submit"
                                value="Atualizar Contrato"
                                className="btn btn-danger"
                                style={btnAdd}
                            />
                        </div>

                    </form>  

                </div>
            </div>
        </div>
    )
}

export default ShowEmpresa;