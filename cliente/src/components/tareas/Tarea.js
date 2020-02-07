import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    //obtener el state de proyectoContext
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {eliminarTarea,obtenerTareas} = tareasContext;

    //aplicamos array destructuring
    const [proyectoActual] = proyecto

    //funcion para eliminar una tarea cuando el usuario de click
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    return (  
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                { tarea.estado
                    ?
                        (
                            <button
                               type="button"
                               className="completo" 
                            >
                                Completo
                            </button>
                        )
                    : 
                        (
                            <button
                               type="button"
                               className="incompleto" 
                            >
                                Incompleto
                            </button>
                        )
                }
            </div>

            <div className="acciones">
                <button
                 type="button"
                 className="btn btn-primario"
                >Editar</button>

                <button
                 type="button"
                 className="btn btn-secundario"
                 onClick={()=> tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>

        </li>
    );
}
 
export default Tarea;