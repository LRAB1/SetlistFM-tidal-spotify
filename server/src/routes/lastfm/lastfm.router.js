//require functionality built in controller

const express = require('express');
const app = express();

const lastFmRouter = express.Router();

app.get('/lastfm', (req, res) => {
    res.send('LastFM page')
});


module.exports = lastFmRouter;