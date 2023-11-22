import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import SortIcon from "@mui/icons-material/ArrowDownward";
import Lista from "./Lista";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

type CursoData = {
  estudante_id: number;
  nome: string;
  curso_id: string;
  ano_inscricao: number;
};

const columns: TableColumn<CursoData>[] = [
  {
    name: "ID",
    selector: (row) => row.estudante_id, 
    maxWidth: "150px",
  },
  {
    name: "Nome do Estudante",
    selector: (row) => row.nome,
    minWidth: "350px",
  },
  {
    name: "Curso",
    selector: (row) => row.curso_id,
  },
  {
    name: "Ano de Inscrição",
    selector: (row) => row.ano_inscricao,
  },

    {
    name: "Detalhes",
    cell: (row) => (
      <Link to={`/detalhes-estudante-ctesp`}>
        <FontAwesomeIcon icon={faEdit} style={{ color: '#897272', fontSize: '16px', cursor: 'pointer' }}/>
      </Link>
    ),
  },
];

const btnAdd = {
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  gap: 5,
}


function Ctesp() {
  return (
    
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">

          <div className="row">
              <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0">Estudantes do CTeSP</h4>

                      <div>
                        <Link to="/registar-estudante-ctesp">
                          <button className="btn btn-danger" style={btnAdd}>
                             <FontAwesomeIcon icon={faPlus} style={{ color: '#fff', fontSize: '16px' }}/>
                             Registar Estudante
                          </button>
                        </Link>
                      </div>

                  </div>
              </div>
          </div>

          <div className="App">
            <Card>
              <DataTable<CursoData> 
                // title="Lista de Cursos"
                columns={columns}
                data={Lista as CursoData[]}
                defaultSortFieldId="SortIcon"
                sortIcon={<SortIcon />}
                pagination
                selectableRows={false}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ctesp;
