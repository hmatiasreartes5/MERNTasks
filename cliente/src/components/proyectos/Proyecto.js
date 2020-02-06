import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //obtener el state de proyectoState
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext; 

    //obtener el state de tareState
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext;

    //Funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id)
        obtenerTareas(id)
    }

    return (  
        <li>
            <button
                className="btn btn-blank"
                type="button"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}
 
export default Proyecto;