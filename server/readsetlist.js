const fs = require('fs');
const { stringify } = require('querystring');

fs.readFile('./data/raw-setlist.json', (err, setlist) => {
    if (err) throw err;
    const localsetlist = JSON.parse(setlist);
    console.log('Finished reading file.');

    //Artist name gets pulled in json format.
    const artist = localsetlist.artist.name
    //console.log(artist);

    //Grabbing tour name for playlist naming
    const tour = localsetlist.tour.name
    //console.log(tour);

    //Check how many set arrays exist.
    const amountSets = (localsetlist.sets.set.length);
    console.log('Amount of sets played: ' + amountSets);

    //Trying to extract song amount and names.
    const songs = localsetlist.sets.set[0].song;
    //TODO; checken OF er een encore is gespeeld.
    if (amountSets.length > 1 ) {
        /*zorgen dat songs gevuld wordt met songs uit alle bestaande set arrays*/
    }

    //Create setlist.txt, containing artist, tourname and songlist(json unfortunately).
    fs.writeFileSync('./data/setlist.txt', artist + "\r\n" +  tour + "\r\n" + JSON.stringify(songs) + "\r\n"/* + JSON.stringify(encores)*/);    
});