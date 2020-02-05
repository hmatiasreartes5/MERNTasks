import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const Proyecto = ({proyecto}) => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext 

    return (  
        <li>
            <button
                className="btn btn-blank"
                type="button"
                onClick={() => proyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}
 
export default Proyecto;