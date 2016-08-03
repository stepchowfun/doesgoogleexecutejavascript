//////////////////////////////////////////////////////////////////////////
// Configuration                                                        //
//////////////////////////////////////////////////////////////////////////

// express
var express = require('express');
var app = express();

// request logging
var morgan = require('morgan');
app.use(morgan('short'));

// compress responses
var compression = require('compression');
app.use(compression());

// turn off unnecessary header
app.disable('x-powered-by');

// turn on strict routing
app.enable('strict routing');

// use the X-Forwarded-* headers
app.enable('trust proxy');

// template engine
app.set('view engine', 'garnet');

// other static files
app.use(express.static('static'));

//////////////////////////////////////////////////////////////////////////
// Endpoints                                                            //
//////////////////////////////////////////////////////////////////////////

// landing page
app.get('/', function(req, res) {
  res.render('index.garnet');
});

// ajax test
app.get('/ajax', function(req, res) {
  res.json({
    message: '<h1>Yes,</h1><h2>Google executes JavaScript and even makes AJAX requests.</h2>',
  });
});

//////////////////////////////////////////////////////////////////////////
// Main event loop                                                      //
//////////////////////////////////////////////////////////////////////////

// start the server
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %d.', server.address().port);
});
