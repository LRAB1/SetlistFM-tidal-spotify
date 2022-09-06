var unirest = require('unirest');

const urlWithId = "https://api.setlist.fm/rest/1.0/setlist/4bb7d3c2";
const urlWithoutId = "https://api.setlist.fm/rest/1.0/setlist/";
const iD = '4bb7d3c2'

var req = unirest('GET', urlWithoutId + iD)
  .headers({
    'accept': 'application/json',
    'x-api-key': 'NAfOueu-etj29FHm3uehzhq5_Ipr3pD68Ii5'
  })
  .send("")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
