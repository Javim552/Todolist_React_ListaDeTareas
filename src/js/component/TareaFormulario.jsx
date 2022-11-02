import React,  {useState} from "react";
import "../../styles/tareaFormulario.css"
import {v4 as uuidv4} from "uuid";

function TareaFormulario (props){
    const [input, setInput]= useState ("");


    const manejarCambio = e => {
        
        setInput (e.target.value); // Esto nos permite extraer el valor del campo de texto que ingresamos
        console.log (e.target.value);
}

    const manejarEnvio = e => {    //La "e" es un evento
        e.preventDefault ();
        
        const tareaNueva = {
                id: uuidv4 (), //utilizado para crear identificadores únicos universales que permitan reconocer e distinguir un objeto dentro de un sistema
                texto: input,
                completada : false
            }

            props.onSubmit (tareaNueva); // como cuando se envia el formulario.

    }


    return(
        <form classname= "tarea-formulario"
            onSubmit= {manejarEnvio}>
            <input
                className= "tarea-input"
                type = "text"
                placeholder= "Escribe una Tarea"
                name = " Texto"
                onChange ={manejarCambio}
            />
            <button className = "tarea-boton">
                Agregar Tarea
            </button>
        </form>
    )
}
export default TareaFormulario;