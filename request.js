const https = require('https')

//With headers this request gets refused in an ECONNREFUSED error
const url = "https://api.setlist.fm/rest/1.0/setlist/4bb7d3c2";

https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data);
  })
}).on('error', err => {
  console.log(err.message);
});