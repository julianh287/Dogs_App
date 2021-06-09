const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const dogs = require('./dogs');
const temperament = require('./temperament');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/temperament', temperament);

module.exports = router;
