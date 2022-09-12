const fs = require('fs');

var unirest = require('unirest');

//const urlWithId = "https://api.setlist.fm/rest/1.0/setlist/4bb7d3c2"; //Aurora set 3bb0fc9c
const urlWithoutId = "https://api.setlist.fm/rest/1.0/setlist/";
const iD = '3bb0fc9c';

var req = unirest('GET', urlWithoutId + iD)
  .headers({
    'accept': 'application/json',
    'x-api-key': 'NAfOueu-etj29FHm3uehzhq5_Ipr3pD68Ii5'
  })
  .send("")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
    let data = res.raw_body;
    fs.writeFileSync('./data/raw-setlist.json', data);
    console.log(`Data written to file!`)
  });

  req.end();