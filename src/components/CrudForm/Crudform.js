import React, { useState, useEffect } from "react";
import "./Form.Module.css";

const initialform = {
  nombre: "",
  especie: "",
  edad: "",
  _id: 0,
}

const Crudform = ({ handleSubmit, data }) => {

  const [form, setForm] = useState(initialform);
  const [emptyN, setEmptyN] = useState(false);
  const [emptyE, setEmptyE] = useState(false);
  const [emptyA, setEmptyA] = useState(false);

  useEffect(() => {
    if (data) {
      setForm(data)
    } else {
      setForm(initialform)
    }
  }, [data]);

  const _handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  };
  const _handleSubmit = (e) => {
    e.preventDefault()
    if (form.nombre === "") {
      setEmptyN(true);
      setEmptyE(false);
      setEmptyA(false);
    } else if (form.especie === "") {
      setEmptyE(true);
      setEmptyN(false);
      setEmptyA(false);
    }
    else if (form.edad === "") {
      setEmptyA(true);
      setEmptyE(false);
      setEmptyN(false);
    } else {
      handleSubmit(form)
      _handleReset();
      setEmptyE(false);
      setEmptyN(false);
      setEmptyA(false);
    }

  };
  const _handleReset = (e) => {
    setForm(
      initialform
    );
    setEmptyE(false);
    setEmptyN(false);
    setEmptyA(false);
  };

  return (
    <div className="containerform">
      <h2>{form._id === 0 ? "Agregar mascota" : "Editar mascota"}</h2>
      <form onSubmit={_handleSubmit}>
        <label for="first-name"><strong>Nombre</strong></label>
        <br></br>
        <input type="text" name='nombre' onChange={_handleChange} value={form.nombre} />
        <br></br>
        <label className="empty"><strong>{emptyN ? "Este campo es requerido" : ""}</strong></label>
        <br></br>
        <label for="first-name"><strong>Especie</strong></label>
        <br></br>
        <input type="text" name='especie' onChange={_handleChange} value={form.especie} />
        <br></br>
        <label className="empty"><strong>{emptyE ? "Este campo es requerido" : ""}</strong></label>
        <br></br>
        <label for="first-name"><strong>Edad</strong></label>
        <br></br>
        <input type="number" name='edad' min="1" step="1" onChange={_handleChange} value={form.edad} />
        <br></br>
        <label className="empty"><strong>{emptyA ? "Este campo es requerido" : ""}</strong></label>
        <br></br>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={_handleReset} />
      </form>
    </div>
  )
}

export default Crudform
