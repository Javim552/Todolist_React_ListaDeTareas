import React from "react";
import "../../styles/tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas ( {id, texto, completada , completarTarea, eliminarTarea}){  /* Podemos pasar los props que queramos*/
    return(                              
<div className = {completada ? "tarea-contenedor completada" : "tarea-contenedor"}> {/* en condicional ternario se pueden agregar mas de una clase separandolas con un espacio */}
    <div 
    className = "tarea-texto"
    onClick ={() => completarTarea(id)}>
       {texto}
    </div>
    <div className = "tarea-contenedor-iconos"
    onClick = {() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className ="tarea-icono"/>  {/* Estos iconos que vienen de react se ejecutan como componentes de react, por tanto se debe poner como una etiqueta */}
    </div>
</div>

    )

}
export default Tareas;