'use strict';

const fs = require('fs');

fs.readFile('setlist-local.json', (err, data) => {
    if (err) throw err;
    let setlist = JSON.parse(data);
    console.log(setlist);
})

console.log('Finished loading file.');