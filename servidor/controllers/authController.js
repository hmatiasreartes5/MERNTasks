const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async(req,res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    //extraigo el email y password (necesario para poder realizar la autenticacion)
    const {email,password} = req.body;

    try {
        //Revisar si el email del usuario es el correcto
        let usuario = await Usuario.findOne({email})
        if(!usuario){
            res.status(400).json({msg: 'El usuario no existe'});
        }

        //Si el usuario existe, entonces ahora comparo las password para verificar si son las mismas
        let passwordCorrecta = await bcryptjs.compare(password,usuario.password);
        if(!passwordCorrecta){
            res.status(400).json({msg: 'Password incorrecto'});
        }

        //Una vez autenticado que el email y el password sean correctos
        //Crear y firmar JWT
        //Crear JWT
        const payload = {
            usuario: {
                id : usuario.id
            }
        }

        //firmar el JWT
        jwt.sign(payload,process.env.SECRETO,{
            expiresIn : 3600
        },(error,token)=>{
            if(error) throw error;
            //Mensaje de confirmacion
            res.json({token : token});
        });
        

    } catch (error) {
        console.log(error);
    }
}