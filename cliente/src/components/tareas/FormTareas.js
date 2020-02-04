import React from 'react';

const FormTareas = () => {
    return (  
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                     className="input-text"
                     type="text"
                     name="nombre"
                     placeholder="Nombre Proyecto.."
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        className="btn btn-block btn-submit btn-primario"
                        type="submit"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTareas;