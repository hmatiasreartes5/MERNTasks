import React,{useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {TAREAS_PROYECTO,
        AGREGAR_TAREA 
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas : [
            {nombre:'Tarea 1', estado: true, proyectoId: 1},
            {nombre:'Tarea 2', estado: false, proyectoId: 2},
            {nombre:'Tarea 3', estado: true,proyectoId: 3},
            {nombre:'Tarea 4', estado: false,proyectoId: 4},
            {nombre:'Tarea 2', estado: false, proyectoId: 2},
            {nombre:'Tarea 3', estado: true,proyectoId: 4},
            {nombre:'Tarea 4', estado: false,proyectoId: 1},
            {nombre:'Tarea 2', estado: false, proyectoId: 3},
            {nombre:'Tarea 3', estado: true,proyectoId: 2},
            {nombre:'Tarea 4', estado: false,proyectoId: 4},
            {nombre:'Tarea 1', estado: true, proyectoId: 1}
        ],
        tareasproyecto: null
    }

    //crear dispatch y state
    const [state,dispatch] = useReducer(tareaReducer,initialState);

    //OBTENER LAS TAREAS DE UN PROYECTO
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //AGREGAR TAREA A UN PROYECTO
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;