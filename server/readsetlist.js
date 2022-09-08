'use strict';
const fs = require('fs');
const { stringify } = require('querystring');

const songs = [];

fs.readFile('./data/raw-setlist.json', (err, setlist) => {
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
    let songs = JSON.stringify(localsetlist.sets.set/*.song.name*/);
    console.log(songs);

    //Create setlist.txt, containing artis, tourname and songlist(json unfortunately).
    fs.writeFileSync('./data/setlist.txt', artist + "\r\n" +  tour + "\r\n" + songs);
});