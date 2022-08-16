import React from 'react';
import "./Row.Module.css";
const CrudTableRow = ({ el, deletePet, setData }) => {
    let { nombre, especie, edad, _id } = el;
    return (
        <tr>
            <td>{nombre}</td>
            <td>{especie}</td>
            <td>{edad}</td>
            <td className='buttons'>

                <button className='buttonedit' onClick={() => setData(el)}> <ion-icon name="create"></ion-icon></button>
                <button className='buttondelete' onClick={() => deletePet(_id)}><ion-icon name="trash"></ion-icon></button>
            </td>
        </tr>
    )
}

export default CrudTableRow
