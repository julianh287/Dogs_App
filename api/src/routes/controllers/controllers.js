const axios = require('axios').default;
const { BASE_URL, DOG_URL, API_IN_URL } = require('../../constants.js');

function getAllDogs(req, res){
    axios.get(`${BASE_URL}${API_IN_URL}`)
        .then( response => {
            res.status(200);
            res.json(response.data);
        })
        .catch( err => {
            res.status(400);
            res.send('Error. Cannot get.')
        })
};

function getDogByName(req, res){
    const name = req.query.name;
    axios.get(`${BASE_URL}${DOG_URL}${name}`)
        .then( response => {
            res.status(200);
            console.log(response.data);
            res.json(response.data);
        })
        .catch( err => {
            res.status(400);
            res.send('Error. Cannot get.')
        })
};

function getDogById(req, res){
    const id = req.params;
    axios.get(`${BASE_URL}${API_IN_URL}`)
        .then( response => {
            var matchId = response.find( el => el.id===id );
            if(!matchId){
                res.send('No se encontró esa raza');
            };
            res.status(200);
            res.json(matchId);
        })
        .catch( err => {
            res.status(400);
            res.send('Error. Cannot get.');
        })
};

module.exports = {
    getAllDogs,
    getDogByName,
    getDogById
}