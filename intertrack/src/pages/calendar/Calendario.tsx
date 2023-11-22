import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface Estagio {
    id: number,
    estudante_id: string,
    data_inicio: string,
    data_fim: string,
}

function Calendario() 
{
    const [estagios, setEstagios] = useState<Estagio[]>([]);

    useEffect(() => {

        const dadosEstagio: Estagio[] = [
            {
                id: 1,
                estudante_id: 'Aluno 1',
                data_inicio: '2023-11-15',
                data_fim: '2023-11-15',
            },
            {
                id: 2,
                estudante_id: 'Aluno 2',
                data_inicio: '2023-11-20',
                data_fim: '2023-11-22',
            }
        ];

        setEstagios(dadosEstagio);

    }, []);

    const eventosDoCalendario = estagios.map((estagio) => ({
        title: estagio.estudante_id,
        start: estagio.data_inicio,
        end: estagio.data_fim,
    }));

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                {/* <h1>Calendario</h1> */}
                    <FullCalendar 
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={eventosDoCalendario}
                    />
                </div>
            </div>
        </div>
    )
}

export default Calendario;