const express = require('express');
const conectarDB = require('./config/db');

//Crear el servidor 
const app = express();

//Conectar a la base de datos
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;

//Habilitar express.json
app.use(express.json({extended:true}))

//Importar rutas
app.use('/api/usuarios',require('./routes/usuarios'));

//arrancar la app
app.listen(PORT, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})