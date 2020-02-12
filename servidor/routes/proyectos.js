const express = require('express');
const router = express.Router();
const proyectoContoller = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const {check} = require('express-validator')

//Crea proyectos
//api/proyectos
router.post('/',
    auth,
    [
        check('nombre','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoContoller.crearProyecto
);

router.get('/',
    auth,
    proyectoContoller.obtenerProyectos
);

//Actualizar un proyecto via ID
router.put('/:id',
    auth,
    [
        check('nombre','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoContoller.actualizarProyecto
)

//Eliminar un proyecto por su id
router.delete('/:id',
    auth,
    proyectoContoller.eliminarProyecto
)

module.exports = router;