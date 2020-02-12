const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

//Crea tareas
//api/tareas (end point)
router.post('/',
    auth,
    [
        check('nombre','El nombre de la tarea es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
)

//Obtenemos las tareas por proyecto
router.get('/',
    auth,
    tareaController.obtenerTareas
)

//Actualizamos una tarea
router.put('/:id',
    auth,
    tareaController.actualizarTarea
)

//Eliminamos una tarea
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
)

module.exports = router;
