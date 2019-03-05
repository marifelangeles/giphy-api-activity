require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    // Make a `GET` request to Giphy
    axios({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/random`,
        params: {
            key: process.env.GIPHY_API_KEY,
        }
    }).then( response => {
        console.log('response', response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('error with GET', error);
    });
});

module.exports = router;