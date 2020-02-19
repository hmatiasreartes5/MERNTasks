import React,{useState,useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import alertaContext from '../../context/alertas/alertaContext';

const Login = (props) => {

    //extraer los valores del context
    const alertContext = useContext(alertaContext);
    const {alerta , mostrarAlerta} = alertContext;

    const authContext = useContext(AuthContext);
    const {iniciarSesion,mensaje,autenticado} = authContext;

    //State de Login
    const [usuario,guardarUsuario] = useState({
        email: '',
        password : ''
    })

    //Extraigo valores de usuario
    const {email, password} = usuario;

    //Cuando se produzca un error porque el usuario no existe o password incorrecto
    useEffect(()=>{
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
        //eslint-disable-next-line
    },[mensaje,autenticado,props.history])

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value 
        })
    }

    //Cuando el usuario quiera iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        
        //validar que no haya campos vacios
        if(email.trim()==='' || password.trim() ===''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error')
        }

        //Pasarlo al action
        iniciarSesion({email,password});
    }

    return (  
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
            <div className="contenedor-form sombra-dark">
                    <h1>Iniciar Sesion</h1>
                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Tu Password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <input 
                                type="submit"
                                className="btn btn-block btn-primario"
                                value="Iniciar Sesion"
                            />
                        </div>
                    </form>

                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Registrarse
                    </Link>
            </div>
        </div>
    );
}
 
export default Login;