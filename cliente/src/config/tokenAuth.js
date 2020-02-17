import clienteAxios from './axios';

const tokenAuth = token =>{
    if(token){
        //en caso que exista un token lo vamos a pasar por el header
        clienteAxios.defaults.headers.common['x-auth-token'] = token
    }else{
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;