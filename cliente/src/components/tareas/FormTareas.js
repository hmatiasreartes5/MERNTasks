import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTareas = () => {

    //extraar para saber si un proyecto esta activo proyectoState 
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext 

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Aplico Array Destructuring para poder extraer el proyecto actual
    const [proyectoActual] = proyecto

    return (  
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                     className="input-text"
                     type="text"
                     name="nombre"
                     placeholder="Nombre Proyecto.."
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        className="btn btn-block btn-submit btn-primario"
                        type="submit"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTareas;