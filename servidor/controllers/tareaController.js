const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const {validationResult} = require('express-validator')

//Crear un tarea

exports.crearTarea = async(req,res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    //extraigo el proyecto 
    const {proyecto} = req.body;

    try {
        
        const existeProyecto = await Proyecto.findById(proyecto);
        if(!existeProyecto){
            return res.status(400).json({msg:'Proyecto no encontrado'})
        }

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if(existeProyecto.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        //Creamos la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({tarea})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Error en el servidor'})
    }

}

//obtener las tareas por proyecto
exports.obtenerTareas = async(req,res) => {

    //extraer el proyecto
    const {proyecto} = req.query;

    try {
        const existeProyecto = await Proyecto.findById(proyecto);
        if(!existeProyecto){
            return res.status(400).json({msg:'Proyecto no encontrado'})
        }

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if(existeProyecto.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        //obtener las tareas del proyecto
        const tareas = await Tarea.find({proyecto}).sort({creado: -1});
        res.json({tareas})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Error en el servidor'})
    }
}

exports.actualizarTarea = async (req,res) => {
    //Extraemos los valores que necesitamos
    const {proyecto,nombre,estado} = req.body;
    const nuevaTarea={}
    try {
        //revisar si la tarea existe
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            return res.status(404).json({msg:'No existe esa tarea'});
        }

        //extraemos proyecto
        const existeProyecto = await Proyecto.findById(proyecto);

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if(existeProyecto.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        //Guardar la tarea
        nuevaTarea.nombre=nombre;
        nuevaTarea.estado=estado;
        tarea = await Tarea.findOneAndUpdate({_id : req.params.id},nuevaTarea,{new:true});
        res.json({tarea});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Error en el servidor'})
    }
}

exports.eliminarTarea = async(req,res) => {
    //Extraemos los valores que necesitamos
    const {proyecto} = req.query;
    try {
        //revisar si la tarea existe
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            return res.status(404).json({msg:'No existe esa tarea'});
        }

        //extraemos proyecto
        const existeProyecto = await Proyecto.findById(proyecto);

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if(existeProyecto.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        //Eliminamos la tarea
        await Tarea.findOneAndRemove({_id: req.params.id});
        res.json('Tarea Eliminada');

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Error en el servidor'})
    }

}