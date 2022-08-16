import React from 'react'
import CrudTableRow from '../CrudRow/CrudTableRow'
import "./Table.Module.css";


const Crudtable = ({ data, deletePet, setData }) => {

    return (
        <div className='containertable'>
            <div className='headertable'>
                <h2 className='tabletitle'>Datos mascota</h2>
                <table className='thead'>
                    <thead>
                        <tr>
                            <th><strong>Nombre</strong></th>
                            <th><strong>Especie</strong></th>
                            <th><strong>Edad</strong></th>
                            <th><strong>Acciones</strong></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='bodytable'>
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        {data.length === 0 ?
                            (<tr><td colSpan="13">Sin datos</td></tr>)
                            : (data.map((el) => <CrudTableRow key={el._id} el={el} deletePet={deletePet} setData={setData} />))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Crudtable
