const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const { BASE_URL, DOG_URL, API_IN_URL } = require('../../constants.js');
const { Dog, Temperament, conn } = require('../../db.js');

async function inicio(){
    try {
        const respuesta = await axios.get(`${BASE_URL}${API_IN_URL}`) //llama a la API
        let arregloDeTemps = respuesta.data.map( el => el.temperament); //se guarda solo los temperamentos
        arregloDeTemps = arregloDeTemps.join().split(',');//los une en un solo string, y luego lo divide por comas
        arregloDeTemps = arregloDeTemps.map(el => el.toLowerCase().trim()); //homogeniza y limpia de espacios
        let allTemps = new Set (arregloDeTemps); // quita repetidos
        var temps = [...allTemps]; //convierte el Set (obj) en un array
        temps.map(el => Temperament.findOrCreate({ //si ya existe la tabla, no hace nada.
            where:{
                name:el
            }
        }));
        console.log('La tabla de temperamentos se cargó correctamente');
        return;
    } catch (err) {
        console.log(err);
    }
};

async function getAllDogs(req, res){
    try {
        const dogsInAPI = await axios.get(`${BASE_URL}${API_IN_URL}`);
        const dogsInDB = await Dog.findAll({ include: Temperament });
        // pide info a ambos lugares
        const AllDogs = [...dogsInAPI.data, ...dogsInDB]; //mete todo en un nuevo array y lo devuelve
            res.status(200);
            res.json(AllDogs);
    } catch (err) {
        res.status(400);
        console.log(err);
        return;
    }
};

async function getDogByName(req, res){
    const name = req.query.name;
    try {
        const dogsInAPI = await axios.get(`${BASE_URL}${API_IN_URL}`);
        const dogsInDB = await Dog.findAll({ include: Temperament }); // pide info a ambos lugares
        const AllDogs = [...dogsInAPI.data, ...dogsInDB]; // mete todo en un nuevo array
        var response = AllDogs.filter(el => el.name.includes(name));//filtra las razas que contengan en su nombre lo que llega por query      
            res.status(200);
            res.json(response);
    } catch (err) {
        res.status(400);
        console.log(err);
        return;
    }
};

async function getDogById(req, res){
    const idRaza = req.params;
    try {
        const dogsInAPI = await axios.get(`${BASE_URL}${API_IN_URL}`);
        const dogsInDB = await Dog.findAll({ include: Temperament }); // pide info a ambos lugares
        const AllDogs = [...dogsInAPI.data, ...dogsInDB]; // mete todo en un nuevo array
        var matchId = AllDogs.filter(el => { //filtra todo el array
            if(el.id == idRaza.id){ //si matchea el id devuelve ese elemento (tiene doble igual porque esta comparando un string y un numero)
                return el;
            }
        });
        if(!matchId){
            res.send('No se encontró esa raza');
        };
        res.status(200);
        res.json(matchId);
    } catch (err) {
        res.status(400);
        console.log(err);
        return;
    }
};

async function createDogBreed(req, res){
    const {name, height, weight, lifeExpectancy, temperament} = req.body;
    try {
        var catDog = await Dog.create({
            id: uuidv4(),
            name: name,
            height: height,
            weight: weight,
            lifeExpectancy: lifeExpectancy
        });
        await catDog.setTemperaments(temperament);
        console.log('Se creó correctamente');
        res.status(200);
        res.json(catDog);         
    } catch (err) {
        console.log(err)
    }
};

function getAllTemperaments(req, res){
    Temperament.findAll()
        .then(temperamentos => {
            res.json(temperamentos)
        })
}

module.exports = {
    getAllDogs,
    getDogByName,
    getDogById,
    createDogBreed,
    getAllTemperaments,
    inicio
}
