import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

    //Crear el context para poder consumir el state que esta en proyectoState
    const proyectosContext = useContext(proyectoContext);
    const {proyectos,obtenerProyectos} = proyectosContext; //en este caso solo extraigo la pieza del state que necesito (proyectos)

    useEffect(()=>{
        obtenerProyectos();
    },[])

    //validar si proyectos esta vacio
    if(proyectos.length === 0) return <h1 className="proyectos">No hay Proyectos, comienza creando uno</h1>;

    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;