import React from 'react'
import "./Header.Module.css";

const Headerpage = () => {
    return (
        <div class="nav">
            <input type="checkbox" id="nav-check"></input>
            <div class="nav-header">
                <div class="nav-title">
                <strong>Friendly Pet</strong>
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <a href="#" target="self"><strong>Inicio</strong></a>
                <a href="#" target="self"><strong>Mascotas</strong></a>
                <a href="#" target="self"><strong>Acerca de nosotros</strong></a>
            </div>
        </div>
    )
}

export default Headerpage
