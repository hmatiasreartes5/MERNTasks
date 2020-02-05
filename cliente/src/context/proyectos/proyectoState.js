import React, { useReducer } from 'react';
import uuid from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO,
        OBTENER_PROYECTO,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO
    }  from '../../types';


const ProyectoState = props => {

    
const proyectos =[
    {id:1, nombre:'Tienda Virtual'},
    {id:2, nombre: 'Matias'},
    {id:3, nombre: 'Reartes'},
    {id:4, nombre: 'Mern'}]

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto : null
    }

    //dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(proyectoReducer,initialState)

    //Serie de funciones para CRUD
    const mostrarFormulario = () =>{
        dispatch ({
            type:FORMULARIO_PROYECTO
        })
    }

    //obtener proyectos
    //siempre lo que tome mi funcion como parametro es lo que va a ser mi payload
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload : proyectos
        })
    } 

    //Agregar proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();
        //Insertamos el proyecto en el state
        dispatch({
            type : AGREGAR_PROYECTO,
            payload:proyecto
        })
    }

    //validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //eliminar un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario : state.formulario,
                errorformulario: state.errorformulario,
                proyecto:state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;