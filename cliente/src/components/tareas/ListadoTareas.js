import React,{Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyectos = [
        {nombre:'Tarea 1', estado: true},
        {nombre:'Tarea 2', estado: false},
        {nombre:'Tarea 3', estado: true},
        {nombre:'Tarea 4', estado: false}
    ]

    return (  
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas"> 
                {   tareasProyectos.length === 0
                    ? (<li className="tareas"><p>No hay tareas</p></li>)
                    : tareasProyectos.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto</button>
        </Fragment>
    );
}
 
export default ListadoTareas;