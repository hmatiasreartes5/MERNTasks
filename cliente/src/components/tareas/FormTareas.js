import React,{useContext,useState,useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTareas = () => {

    //extraar para saber si un proyecto esta activo proyectoState 
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext 

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada,errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea} =  tareasContext;

    //effect que detecta si hay una tarea seleccionada
    useEffect(()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    },[tareaseleccionada])

    //State de FormTareas
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraigo los valores del state
    const {nombre} = tarea;

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Aplico Array Destructuring para poder extraer el proyecto actual
    const [proyectoActual] = proyecto

    const handlChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario agrege una nueva tarea
    const onSubmit = e => {
        e.preventDefault();
         
        //Validacion
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //verificar si se va a editar o agrega una nueva tarea
        if(tareaseleccionada === null){
            //nueva tarea
            //agregar la nueva tarea al state de tareaState
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea)
        }else {
            //editar la tarea
            actualizarTarea(tarea)
        }
        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciar el form
        guardarTarea({
            nombre:''
        })
    }

    return (  
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                     className="input-text"
                     type="text"
                     name="nombre"
                     placeholder="Nombre Proyecto.."
                     value={nombre}
                     onChange={handlChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        className="btn btn-block btn-submit btn-primario"
                        type="submit"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
    );
}
 
export default FormTareas;