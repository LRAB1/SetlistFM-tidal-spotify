'use strict';
const fs = require('fs');
const { stringify } = require('querystring');

const songs = [];

fs.readFile('./data/setlist-local.json', (err, setlist) => {
    if (err) throw err;
    let localsetlist = JSON.parse(setlist);
    
    console.log('Finished reading file.');

    //Artist name gets pulled in json format.
    let artist = localsetlist.artist.name
    console.log(artist);

    //Grabbing tour name for playlist naming
    let tour = localsetlist.tour.name
    console.log(tour);

    //Trying to extract song names. Runs into name being undefined error.
    let songs = JSON.stringify(localsetlist.sets.set);
    console.log(songs);

    //Create setlist.txt
    //fs.writeFileSync('./data/setlist.txt', songs)

    //create file with artist name.
    //fs.writeFileSync('./data/artist.txt', artist);

    //create file with tour name.
    //fs.writeFileSync('./data/tourname.txt', tour);

    //TODO: create a file with all three paramaters.
});