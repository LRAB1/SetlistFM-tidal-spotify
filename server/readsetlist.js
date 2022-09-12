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
    //const amountSets = songsandEncore
    const amountSets = [];
    console.log('amount of sets', amountSets);
    if (localsetlist.sets.set.length > 1) {
        console.log('An encore was played');
        amountSets.push(localsetlist.sets.set.length)
    } else console.log('No encore was played');
        amountSets.push(localsetlist.sets.set.length);

    //Grabbing songs and names.
    //TODO make smart; needs to use data from amountSets to itterate through the sets and return all songs
    const songs = localsetlist.sets.set[0].song;

    //Create setlist.txt, containing artist, tourname and songlist(json unfortunately).
    fs.writeFileSync('./data/setlist.txt', artist + "\r\n" +  tour + "\r\n" + JSON.stringify(songs) + "\r\n"/* + JSON.stringify(encores) */);    
});