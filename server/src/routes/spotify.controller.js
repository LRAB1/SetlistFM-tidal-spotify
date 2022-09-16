//TODO build integration with Spotify API.
//Seems like we'll need to run GET/Search request with filtering for artist and songs and adding tour from setlist controller.
const fs = require('fs');

var unirest = require('unirest');
const spotifyKey = require('../../../keys');

//const urlWithId = "https://api.setlist.fm/rest/1.0/setlist/4bb7d3c2"; //Aurora set 3bb0fc9c //Stones set met 4 entries 3d69d57
/*const URL_SPOT = "https://api.spotify.com/";
const 
const iD = '';*/

var client_id = 'CLIENT_ID';
var redirect_uri = 'http://localhost:8888/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});