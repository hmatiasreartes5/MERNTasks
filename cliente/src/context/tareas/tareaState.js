import React,{useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import uuid from 'uuid';

import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas : [
            {id: 1 ,nombre:'Tarea 1', estado: true, proyectoId: 1},
            {id: 2 ,nombre:'Tarea 2', estado: false, proyectoId: 2},
            {id: 3 ,nombre:'Tarea 3', estado: true,proyectoId: 3},
            {id: 4 ,nombre:'Tarea 4', estado: false,proyectoId: 4},
            {id: 5 ,nombre:'Tarea 2', estado: false, proyectoId: 2},
            {id: 6 ,nombre:'Tarea 3', estado: true,proyectoId: 4},
            {id: 7 ,nombre:'Tarea 4', estado: false,proyectoId: 1},
            {id: 8 ,nombre:'Tarea 2', estado: false, proyectoId: 3},
            {id: 9 ,nombre:'Tarea 3', estado: true,proyectoId: 2},
            {id: 10 ,nombre:'Tarea 4', estado: false,proyectoId: 4},
            {id: 11 ,nombre:'Tarea 1', estado: true, proyectoId: 1}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada : null
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
        tarea.id= uuid.v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //VALIDAR ERROR EN CASO QUE SEA NECESARIO
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //ELIMINAR TAREA POR SU ID
    const eliminarTarea = id => {
        dispatch({
            type:ELIMINAR_TAREA,
            payload: id
        })
    }

    //CAMBIAR EL ESTADO DE UNA TAREA
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //FUNCION QUE EXTRAE LA TAREA ACTUAL PARA EDITAR
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //FUNCION QUE VA A EDITAR UNA TAREA
    const actualizarTarea = tarea =>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;