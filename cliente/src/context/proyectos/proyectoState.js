import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO,OBTENER_PROYECTO}  from '../../types';


const ProyectoState = props => {

    
const proyectos =[
    {id:1, nombre:'Tienda Virtual'},
    {id:2, nombre: 'Matias'},
    {id:3, nombre: 'Reartes'},
    {id:4, nombre: 'Mern'}]

    const initialState = {
        proyectos : [],
        formulario : false
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

    return(
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario : state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;