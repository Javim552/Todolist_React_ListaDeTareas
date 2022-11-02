import React, {useState} from "react";
import TareaFormulario from "../component/TareaFormulario.jsx";
import "../../styles/ListadeTareas.css"
import Tareas from "../component/Tareas.jsx"

 function ListadeTareas ( ){ // un componente no puede tenr dos elementos div, sino uno
                             // Como estado inicial metemos un objeto vacio 
   
    const[tareas,setTareas] = useState ([]); 


        const agregarTarea = tarea => {
           if (tarea.texto.trim ()){
                tarea.texto= tarea.texto.trim ();
                const tareasActualizadas = [tarea, ...tareas]; // ... operador que convertimos de un arreglo a objetos individuales
                setTareas (tareasActualizadas);
           }
        }

        const eliminarTarea = id => {
            const tareasActualizadas = tareas.filter (tarea => tarea.id !== id);
            setTareas (tareasActualizadas);

        }

    return (

  
                                                //  <> fragmentos en react que no aparecen cuando se crea la estructura cuando no queremos agregar un contenedor
    <>
        <TareaFormulario  onSubmit= {agregarTarea}/>
        <div className = "tareas-lista-contenedor">
            {
              tareas.map((tarea)=>
              <Tareas key= {tarea.id} id={tarea.id}  texto= {tarea.texto} completada = {tarea.completada} eliminarTarea= {eliminarTarea}/> // key atributo que tiene react de identificar un elemento en la lista
               
              )  
            }

        </div>
    </>

)


}
export default ListadeTareas