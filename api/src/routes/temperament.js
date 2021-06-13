const { Router } = require('express');
const router = Router();
const { getAllTemperaments } = require('./controllers/controllers.js');

router.get('/', (req, res) => {
    getAllTemperaments(req, res); // ✓
})

module.exports = router;