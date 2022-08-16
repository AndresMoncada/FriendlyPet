import React, { useEffect, useState } from "react";
import Crudform from '../CrudForm/Crudform'
import Crudtable from '../CrudTable/Crudtable'
import Headerpage from "../HeaderPage/Headerpage";
import { postPets, getPets, deletePets, updatePet } from '../../services'
import "./App.Module.css";

const Crudapp = () => {
  const [db, setDb] = useState([]);
  const [recarge, setRecarge] = useState(0);
  const [data, setData] = useState(null);

  const handleSubmit = (data) => {
    console.log(data._id);
    if (data._id === 0) {
      // console.log("Crear");
      postPets(data)
        .then(setRecarge(recarge + 1))
    }
    else {
      // console.log("Editar");
      updatePet(data)
        .then(setRecarge(recarge + 1))
    }

  };

  const deletePet = (_id) => {
    deletePets(_id)
      .then(setRecarge(recarge + 1))
  }

  useEffect(() => {
    getPets()
      .then(
        (response) => {
          setDb(response.data)
        }
      );

  }, [recarge])

  return (
    <div className="pagebody">
      <Headerpage />

      <div className="maincontainer">
        <div id="formspace" className="formspace">
          <Crudform
            handleSubmit={handleSubmit}
            data={data}
          />
        </div>
        <div id="tablespace" className="tablespace">
          <Crudtable
            data={db}
            deletePet={deletePet}
            setData={setData} />
        </div>
      </div>
    </div>
  )
}

export default Crudapp
