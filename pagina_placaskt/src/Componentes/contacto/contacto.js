import React from "react";
import "./contacto.css";

const contacto = () => {


return (
        <>
        <h2> Formulario</h2>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" />
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" />
            </div>
            <div>
                <label>Gusto de helado</label>
                <select>
                    <option value="ch"> Chocolate </option>
                    <option value="dl"> Dulce de leche </option>
                    <option value="lm"> Limon </option>
                </select>
            </div>
            <input type="Submit" value="Enviar" />
        </form>
        </>
    );
};
export default contacto;