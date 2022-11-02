import React from "react";    //6:19:19
import ListadeTareas from "./ListadeTareas.jsx";




//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="aplicacion-tareas">
			<div className = "tareas-lista-principal">
				<h1>Mis tareas</h1>
				<ListadeTareas/>
				
			</div>
			
			
			
		</div>
	);
};

export default Home;
