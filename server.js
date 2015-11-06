var express = require('express');
var app = express();
var http = require('http').Server(app);

var router = require('./router');

var sessions = ['a','b']
router.init(express, app, http, sessions);
router.route('ejs');
router.listen(process.env.PORT || 5000);

