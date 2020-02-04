import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

      //State de Login
      const [usuario,guardarUsuario] = useState({
        nombre: '',
        email: '',
        password : '',
        confirmar: ''
    })

    //Extraigo valores de usuario
    const {nombre,email, password,confirmar} = usuario;

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

        //Password minimo de 6 caracteres

        //Revisar ambos password sean iguales 

        //Pasarlo al action
    }

    return (  
        <div className="form-usuario">
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