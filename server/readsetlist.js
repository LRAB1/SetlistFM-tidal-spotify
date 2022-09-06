'use strict';
const { on } = require('events');
const fs = require('fs');

fs.readFile('./data/setlist-local.json', (err, data) => {
    if (err) throw err;
    let localsetlist = JSON.parse(data);
    //console.log(localsetlist);
    console.log('Finished reading file.');
});