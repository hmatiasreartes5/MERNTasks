import React,{useState,useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

    //extraer los valores del context
    const alertContext = useContext(alertaContext);
    const {alerta , mostrarAlerta} = alertContext;

    const authContext = useContext(AuthContext);
    const {mensaje,autenticado,registrarUsuario} = authContext;

      //State de Login
      const [usuario,guardarUsuario] = useState({
        nombre: '',
        email: '',
        password : '',
        confirmar: ''
    })

    //Extraigo valores de usuario
    const {nombre,email, password,confirmar} = usuario;

    //Cuando se produzca un error en el registro de usuario
    useEffect(()=>{
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
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
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() ===1){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        }

        //Password minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password tiene que ser por lo menos de 6 caracteres','alerta-error')
            return;
        }
        //Revisar ambos password sean iguales
        if(password !== confirmar){
            mostrarAlerta('Los password no son iguales','alerta-error')
            return;
        } 

        //Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
    }

    return (  
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
            <div className="contenedor-form sombra-dark">
                    <h1>Registrarse</h1>
                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu Nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>

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
                            <label htmlFor="confirmar">Confirmar Password</label>
                            <input 
                                type="password"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Confirmar Password"
                                value={confirmar}
                                onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <input 
                                type="submit"
                                className="btn btn-block btn-primario"
                                value="Registrarse"
                            />
                        </div>
                    </form>

                    <Link to={'/'} className="enlace-cuenta">
                        Inicia Sesion
                    </Link>

            </div>
        </div>
    );
}
 
export default NuevaCuenta;