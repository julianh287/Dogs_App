const { Router } = require('express');
const router = Router();
const { getAllDogs, getDogByName, getDogById } = require('./controllers/controllers.js');

router.get('/', (req, res)=>{
    const name = req.query.name;
    if(name){
        getDogByName(req, res);
    } else {
        getAllDogs(req, res);
    }
});

router.get('/:idRaza', (req, res)=>{
    getDogById(req, res);
});

router.post('/', (req, res)=>{
    //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body y crea una raza de perro en la base de datos:
});

module.exports = router;