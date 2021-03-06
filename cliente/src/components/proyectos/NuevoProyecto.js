import React,{Fragment,useState,useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //consumir el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const {formulario,errorformulario,mostrarFormulario,agregarProyecto,mostrarError} = proyectosContext

    const [proyecto,guardarProyecto] = useState({
        nombre: ''
    })

    //extraigo el valor del state
    const {nombre} = proyecto;

    //funcion para leer el los valores del form
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario cree un nuevo proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        //validar proyecto 
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)

        //reiniciar el formulario
        guardarProyecto({
            nombre: ''
        })
    }

    //Mostrar el formulario cuando se haga click
    const onClickFormulario = () =>{
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo Proyecto
            </button>

            {formulario 
                ? 
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            className="input-text"
                            type="text"
                            name="nombre"
                            placeholder="Nombre Proyecto"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            className="btn btn-block btn-primario"
                            type="submit"
                            value="Agregar Proyecto"
                        />
                    </form>

                : null 
            }

            {
                errorformulario 
                ?
                    <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
                :   null 
            }
        </Fragment>
     );
}
 
export default NuevoProyecto;