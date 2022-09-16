const fs = require('fs');

var unirest = require('unirest');
const setlistFmKey = require('../../../keys');

//const urlWithId = "https://api.setlist.fm/rest/1.0/setlist/4bb7d3c2"; //Aurora set 3bb0fc9c //Stones set met 4 entries 3d69d57
const urlWithoutId = "https://api.setlist.fm/rest/1.0/setlist/";
const iD = '63b2aa3f';

var req = unirest('GET', urlWithoutId + iD)
  .headers({
    'accept': 'application/json',
    'x-api-key': setlistFmKey
  })
  .send("")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
    let data = res.raw_body;
    fs.writeFileSync('././data/raw-setlist.json', data);
    console.log(`Data written to file!`)
  });

  req.end();