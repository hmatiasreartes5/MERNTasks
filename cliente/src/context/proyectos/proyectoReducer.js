import {FORMULARIO_PROYECTO,OBTENER_PROYECTO}  from '../../types';

//LO UNICO QUE HACE EL REDUCER ES CAMBIAR EL STATE DE proyectoState en este caso

export default (state,action) =>{
    switch(action.type){
        case FORMULARIO_PROYECTO :
                    return {
                        ...state,
                        formulario : true
                    }
        case OBTENER_PROYECTO :
                    return {
                        ...state,
                        proyectos : action.payload
                    }
        default: 
            return state;
    }
}