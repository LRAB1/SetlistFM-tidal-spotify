//const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express();
const PORT = 3000;

const lastFmRouter = require('./routes/lastfm/lastfm.router')

//app.use(express.json());
//app.use(express.stat)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});

app.get('/', (req, res) => {
    res.send('Homepage')
});
app.get('/lastfm', lastFmRouter)