const { Router } = require('express');
const router = Router();
const dogs = require('./dogs.js');
const temperament = require('./temperament.js');
const {inicio} = require('./controllers/controllers.js');

// Configurar los routers
//inicio() //como hago para ejecutar esto solo la primera vez y que no se agreguen repetidos todos los temperamentos cada vez que guardo? es necesario hacerlo para que funcione correctamente la BD?
router.use('/dogs', dogs);
router.use('/temperament', temperament);

module.exports = router;
