import React,{useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';

import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada : null
    }

    //crear dispatch y state
    const [state,dispatch] = useReducer(tareaReducer,initialState);

    //OBTENER LAS TAREAS DE UN PROYECTO
    const obtenerTareas =async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas',{params: {proyecto}});
            console.log(resultado)
            dispatch({
                type: TAREAS_PROYECTO,
                payload:resultado.data.tareas
            })
        } catch (error) {
            console.log(error)
        }
    }

    //AGREGAR TAREA A UN PROYECTO
    const agregarTarea =async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas',tarea);
            console.log(resultado)
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    //VALIDAR ERROR EN CASO QUE SEA NECESARIO
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //ELIMINAR TAREA POR SU ID
    const eliminarTarea =async (id,proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`,{params: {proyecto}});
            dispatch({
                type:ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //FUNCION QUE VA A EDITAR UNA TAREA
    const actualizarTarea = async tarea =>{
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea);
            console.log(resultado)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    //FUNCION QUE EXTRAE LA TAREA ACTUAL PARA EDITAR
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    

    return(
        <tareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;