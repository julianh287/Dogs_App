const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { BASE_URL, DOG_URL, API_IN_URL } = require('../constants.js');

router.get('/', (req, res) => {
    res.send('hola, soy un temperamento!')
})

module.exports = router;