//Rutas para autenticacion
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');

//Iniciar Sesion
// api/auth (end point)
router.post('/',
    authController.autenticarUsuario
);

//Obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
)
module.exports = router;