const { Router } = require('express');
const router = Router();
const { getAllDogs, getDogByName, getDogById, createDogBreed } = require('./controllers/controllers.js');

router.get('/', (req, res)=>{
    const name = req.query.name;
    if(name){
        getDogByName(req, res);//match(BD+API) ✓
    } else {
        getAllDogs(req, res);//BD+API ✓
    }
});

router.get('/:id', (req, res)=>{ // ✓
    getDogById(req, res);
});

router.post('/', (req, res)=>{ // ✓
    createDogBreed(req, res);
});

module.exports = router;