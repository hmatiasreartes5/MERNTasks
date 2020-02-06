import React,{Fragment,useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    //extraigo los proyectos del proyectoState 
    const proyectosContext = useContext(proyectoContext);
    const {proyecto,eliminarProyecto} = proyectosContext 

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} =  tareasContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //Aplico Array Destructuring para poder extraer el proyecto actual
    const [proyectoActual] = proyecto


    //Cuando el usuario de click eliminara el proyecto
    const onclickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (  
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas"> 
                {   tareasproyecto.length === 0
                    ? (<li className="tareas"><p>No hay tareas</p></li>)
                    : tareasproyecto.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onclickEliminar}
            >Eliminar Proyecto</button>
        </Fragment>
    );
}
 
export default ListadoTareas;