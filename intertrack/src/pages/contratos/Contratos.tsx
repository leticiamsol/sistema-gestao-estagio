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
  contrato_id: number;
  estudante_id: string;
  empresa_id: string;
  data_inicio: string;
};

const columns: TableColumn<CursoData>[] = [
  {
    name: "ID",
    selector: (row) => row.contrato_id, 
    maxWidth: "150px",
  },
  {
    name: "Nome do Estudante",
    selector: (row) => row.estudante_id,
    minWidth: "350px",
  },
  {
    name: "Nome do Empresa",
    selector: (row) => row.empresa_id,
  },
  {
    name: "Data de Início",
    selector: (row) => row.data_inicio,
  },

    {
    name: "Detalhes",
    cell: (row) => (
      <Link to={`/detalhes-contrato`}>
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


function Empresas() {
  return (
    
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">

          <div className="row">
              <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0">Contratos</h4>

                      <div>
                        <Link to="/registar-contrato">
                          <button className="btn btn-danger" style={btnAdd}>
                             <FontAwesomeIcon icon={faPlus} style={{ color: '#fff', fontSize: '16px' }}/>
                             Registar Contrato
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

export default Empresas;
