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



function CriarCurso() 
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
                                        <li><Link to="/cursos" style={{ color: '#6d757d', marginLeft: '3px' }} className='curso-link'>Curso</Link></li>
                                        <li>
                                            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#6D757D', fontSize: '12px' }}/>
                                        </li>
                                        <li className="breadcrumb-item active">Criar Curso</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <form method="" action="" className="row">
                            
                        <div className="card-body" id="form-table" style={backGround}>

                            <h4 className="mb-sm-0">Registar Curso</h4>

                            <div className="row mb-3">
                                <label htmlFor="nome-input" className="col-sm-2 col-form-label">Nome do Curso</label>
                                <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name='nome_curso'
                                    placeholder="Digite o nome do curso"
                                    value="Nome na base de dados"
                                    id="nome-input"
                                    // disabled
                                />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="tipo-refeicao-input" className="col-sm-2 col-form-label">Área</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='area_curso'
                                        placeholder="Digite a área"
                                        value="Área na base de dados"
                                        id="tipo-refeicao-input"
                                        // disabled
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="descricao-input" className="col-sm-2 col-form-label">Ano de Criação</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="number"
                                        name='ano_criacao_curso'
                                        placeholder="Digite o ano"
                                        value="2015"
                                        id="descricao-input"
                                        // disabled
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="ingredientes-input" className="col-sm-2 col-form-label">Nível de Especialização</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name='nivel_curso' id="ingredientes-input">
                                        <option value="CTeSP">CTeSP</option>   
                                        <option value="Licenciatura">Licenciatura</option>   
                                        <option value="Mestrado">Mestrado</option>   
                                        <option value="Doutoramento">Doutoramento</option>   
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="descricao-input" className="col-sm-2 col-form-label">Duração do Curso</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="number"
                                        name='duracao_curso'
                                        placeholder="Digite o número de anos"
                                        value="2"
                                        id="descricao-input"
                                        // disabled
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="descricao-input" className="col-sm-2 col-form-label" style={descriptionDisplay}>Descrição <span style={optional}>(opcional)</span></label>
                                <div className="col-sm-10">
                                    <textarea name="descricao_curso" id="textarea" className="form-control" style={{ height: '120px' }}></textarea>
                                </div>
                            </div>

                            <input
                                type="submit"
                                value="Registar Curso"
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

export default CriarCurso;