import React from 'react';

const Proyecto = ({proyecto}) => {
    return (  
        <li>
            <button
                className="btn btn-blank"
                type="button"
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}
 
export default Proyecto;