'use strict';
const fs = require('fs');
const { stringify } = require('querystring');

fs.readFile('./data/raw-setlist.json', (err, setlist) => {
    if (err) throw err;
    const localsetlist = JSON.parse(setlist);
    
    console.log('Finished reading file.');

    //Artist name gets pulled in json format.
    const artist = localsetlist.artist.name
    console.log(artist);

    //Grabbing tour name for playlist naming
    const tour = localsetlist.tour.name
    console.log(tour);

    //Check how many set arrays exist.
    const amountSets = (localsetlist.sets.set.length);
    console.log('Amount of sets played: ' + amountSets);


    //Trying to extract song amount and names
    const songAmount = localsetlist.sets.set[0].song;
    const encores = localsetlist.sets.set[1].song;
    console.log(`Amount of songs in setlist: `+ songAmount.length);
    console.log('Amount of songs in encore: ' + encores.length);
    console.log(songAmount);
    console.log(encores);

    //Create setlist.txt, containing artis, tourname and songlist(json unfortunately).
    fs.writeFileSync('./data/setlist.txt', artist + "\r\n" +  tour + "\r\n" + JSON.stringify(songAmount) + "\r\n" + JSON.stringify(encores));
});