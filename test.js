
"use strict";

var express = require('express');
var app = express();
var router = express.Router();


router.get('/test', function(req, res) {
    console.log('test');
    res.render('amp-access/login', {
        returnUrl: req.query.return,
        readerId: req.query.rid
    });
});