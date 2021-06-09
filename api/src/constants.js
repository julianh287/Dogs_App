require('dotenv').config();
const { API_KEY } = process.env;

const BASE_URL = 'https://api.thedogapi.com/v1/breeds/';
const DOG_URL = 'search?q=';
const API_IN_URL = `?api_key=${API_KEY}`;


module.exports = {
    BASE_URL,
    DOG_URL,
    API_IN_URL
};
