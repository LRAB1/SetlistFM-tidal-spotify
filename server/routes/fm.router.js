const express = require('express');

const {
    fmGetList,
} = require('./fm.controller');

const fmRouter = express.Router();

fmRouter.get('/');

module.exports = fmRouter;