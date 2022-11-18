import React from "react";
import { useForm } from "react-hook-form";
import "./contacto.css";

const Contacto = () => {
const { register, formState:{ errors}, watch ,handleSubmit } = useForm("");
const onSubmit = (data) =>{ 
  console.log(data);
}
    return (
        <>
        {/* ------------------FORMULARIO---------- */}
        <h2> Formulario</h2>
        <div> Nombre:{ watch('nombre')}</div>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {required: true, maxLength:10
                })} />
                {errors.nombre?.type === 'required'&& <p>El campo nombre es obligatorio </p>}
            </div>

            <div>
                <label>Apellido</label>
                <input type="text" {...register('apellido',{required: true
                })} />
            </div>

            <div>
                <label>Email</label>
                <input type="text" {...register('email', {pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                        })} />
                {errors.email?.type === 'required'&& <p>El formato es incorrecto</p>}
            </div>

            <div>
                <label>Gusto de helado</label>
                <select {...register('sabor')} >
                    <option value="ch"> Chocolate </option>
                    <option value="dl"> Dulce de leche </option>
                    <option value="lm"> Limon </option>
                </select>
            </div>
            <input type="Submit" value="Enviar" />
        </form>



        </>
    )
}
export default contacto;