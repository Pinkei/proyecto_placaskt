import React from 'react';
import './intro.css';
import piletalogo from './piletalogo.jpeg';
import CustomButton from '../Button/customButton';



const Intro = ({ titulo }) => {
    return(
    <div className='contenedorImagen'>
    <img src={piletalogo} className="piletalogo" alt="Foto principal "/>
    <h1> {titulo} </h1>

    <CustomButton color="red" texto="Botón intro" ></CustomButton>
    <CustomButton color="blue" texto="Botón intro" ></CustomButton>


    </div>
)
}

export default Intro;