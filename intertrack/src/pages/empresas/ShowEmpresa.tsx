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
                                        <li><Link to="/empresas" style={{ color: '#6d757d', marginLeft: '3px' }} className='curso-link'>Voltar</Link></li>
                                        <li>
                                            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#6D757D', fontSize: '12px' }}/>
                                        </li>
                                        <li className="breadcrumb-item active">Atualizar Empresa</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <form method="" action="" className="row">
                            
                        <div className="card-body" id="form-table" style={backGround}>

                            <h4 className="mb-sm-0">Atualizar Empresa</h4>

                            <div className="row mb-3">
                                <label htmlFor="nome-input" className="col-sm-2 col-form-label">Nome da Empresa</label>
                                <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="text" 
                                    name='nome'
                                    placeholder="Digite o nome da empresa"
                                    id="nome-input"
                                    disabled
                                />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="nome-input" className="col-sm-2 col-form-label">NIF</label>
                                <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="number" 
                                    name='nif'
                                    placeholder="Digite o NIF"
                                    id="nome-input"
                                    disabled
                                />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="tipo-refeicao-input" className="col-sm-2 col-form-label">Distrito</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='distrito' id="ingredientes-input" disabled>
                                        <option value="">Selecionar Distrito</option>   
                                        <option value="Porto">Porto</option>   
                                        <option value="Lisboa">Lisboa</option>   
                                        <option value="Outro">Outro</option>   
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="tipo-refeicao-input" className="col-sm-2 col-form-label">Concelho</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='concelho' id="ingredientes-input" disabled>
                                        <option value="">Selecionar Concelho</option>   
                                        <option value="Porto">Porto</option>   
                                        <option value="Lisboa">Lisboa</option>   
                                        <option value="Outro">Outro</option>   
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="tipo-refeicao-input" className="col-sm-2 col-form-label">Freguesia</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='freguesia' id="ingredientes-input" disabled>
                                        <option value="">Selecionar Freguesia</option>   
                                        <option value="Porto">Porto</option>   
                                        <option value="Lisboa">Lisboa</option>   
                                        <option value="Outro">Outro</option>   
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="tipo-refeicao-input" className="col-sm-2 col-form-label">Morada</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="string" 
                                        name='morada'
                                        placeholder="Digite a morada"
                                        id="nome-input"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="descricao-input" className="col-sm-2 col-form-label">Área</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='area' id="ingredientes-input" disabled>
                                        <option value="">Selecionar</option>   
                                        <option value="Tecnologia">Tecnologia</option>   
                                        <option value="Gestão">Gestão</option>   
                                        <option value="Turismo">Turismo</option>   
                                        <option value="Outro">Outro</option>   
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-2 col-form-label" style={descriptionDisplay}>Descrição<span style={optional}>(opcional)</span></div>
                                <div className="col-sm-10">
                                    <textarea name="descricao" id="textarea" className="form-control" style={{ height: '120px' }} disabled></textarea>
                                </div>
                            </div>

                            <input
                                type="submit"
                                value="Atualizar Empresa"
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