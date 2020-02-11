//Rutas para autenticacion
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');

//Crea una atenticacion
// api/auth (end point)
router.post('/',
    [
        check('email','Agrega un email valido').isEmail(),
        check('password','El password debe ser de 6 caracteres').isLength({min:6})
    ],
    authController.autenticarUsuario
);

module.exports = router;