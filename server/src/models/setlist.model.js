const fs = require('fs');
const { stringify } = require('querystring');

fs.readFile('../../data/raw-setlist.json', (err, setlist) => {
    if (err) throw err;
    const localsetlist = JSON.parse(setlist);
    console.log('Finished reading file.');
    //testSetlist.push(localsetlist);

    //Artist name gets pulled in json format.
    const artist = localsetlist.artist.name
    //console.log(artist);

    //Grabbing tour name for playlist naming.
    const tour = [];
    if (!localsetlist.tour) {
        console.log('No tour found.')
    } else tour.push(localsetlist.tour.name)
    //console.log(tour);

    //Check how many set arrays exist and therefore if an encore was performed.
    const amountSets = [];
    amountSets.push(localsetlist.sets.set.length);
    //console.log('amount of sets', amountSets);

    //Extracting songs and pushing to txt file, dumb but works.
    const songs = [];
    if (amountSets !==0 ) {
            songs.push(localsetlist.sets.set[0]);
            songs.push(localsetlist.sets.set[1]);
            songs.push(localsetlist.sets.set[2]);
            songs.push(localsetlist.sets.set[3]);
            songs.push(localsetlist.sets.set[4]);
    }   else console.log('Data not known to SetlistFm');

    //Create setlist.txt, containing artist, tourname and songlist(json unfortunately).
    fs.writeFileSync('../../data/setlist.txt', artist + "\r\n" +  tour + "\r\n" + JSON.stringify(songs,null, 4));
    
    //Create exportable object for communication towards streamingservice.
        //module.exports = artist, tour, songs; //ugly and doesnt work.
});