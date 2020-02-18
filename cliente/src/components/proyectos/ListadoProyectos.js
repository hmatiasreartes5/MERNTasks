import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import alertaContext from '../../context/alertas/alertaContext';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

const ListadoProyectos = () => {

    //Crear el context para poder consumir el state que esta en proyectoState
    const proyectosContext = useContext(proyectoContext);
    const {proyectos,mensaje,obtenerProyectos} = proyectosContext; //en este caso solo extraigo la pieza del state que necesito (proyectos)

    const alertContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertContext;

    useEffect(()=>{

        //si hay un error
        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }

        obtenerProyectos();
        //eslint-disable-next-line
    },[mensaje])

    //validar si proyectos esta vacio
    if(proyectos.length === 0) return <h1 className="proyectos">No hay Proyectos, comienza creando uno</h1>;

    return (  
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                    key={proyecto._id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Proyecto 
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;