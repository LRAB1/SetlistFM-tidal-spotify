'use strict';
const { on } = require('events');
const fs = require('fs');

const songs = [];

fs.readFile('./data/setlist-local.json', (err, setlist) => {
    if (err) throw err;
    let localsetlist = JSON.parse(setlist);
    //hier iets doen met parsed info
    //console.log(localsetlist);
    console.log('Finished reading file.');
    console.log(localsetlist.artist.name);
    console.log(localsetlist.sets.set.song/*.name*/)
});