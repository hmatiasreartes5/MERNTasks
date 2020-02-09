//Rutas para creas usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Crea un usuario
// api/usuarios (end point)
router.post('/',
    usuarioController.crearUsuario
)

module.exports = router;