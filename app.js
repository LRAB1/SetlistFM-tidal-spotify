const express = require('express');
const app = express();

const url = require('url');

const testUrl = ('https://api.setlist.fm/rest/1.0/setlist/4bb7d3c2')

app.get