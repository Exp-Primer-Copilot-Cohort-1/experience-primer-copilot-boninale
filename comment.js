// Create web server
// npm install express
// npm install body-parser
// npm install cookie-parser
// npm install express-session
// npm install multer
// npm install mysql
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var app = express();
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});
conn.connect();
app.listen(3000, function() {
    console.log('Server running at http://

