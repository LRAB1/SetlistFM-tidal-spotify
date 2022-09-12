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

    //Check how many set arrays exist and therefore if an encore was performed.
    const amountSets = [];
    amountSets.push(localsetlist.sets.set.length);
    console.log('amount of sets', amountSets);

    //Grabbing songs and names.
    //TODO make smart; needs to use data from amountSets to itterate through the sets and return all songs
    //const songs = [localsetlist.sets.set[0].song , localsetlist.sets.set[1].song]; returns sets manually added.
    const songs = [];
    if (amountSets.length !== 0 ) {
        //make smort
    } else songs.push(localsetlist.sets.set.song.name) //not sure this works

    //Create setlist.txt, containing artist, tourname and songlist(json unfortunately).
    fs.writeFileSync('./data/setlist.txt', artist + "\r\n" +  tour + "\r\n" + JSON.stringify(songs,null, 4));    
});