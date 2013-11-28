
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/thankyou', routes.thankyou);

app.use(express.bodyParser());
app.post('/contact', function(req, res) {
  var name = req.body.FNAME + ' ' + req.body.FNAME,
  	  email = req.body.EMAIL,
  	  body = req.body.BODY;

	var sendgrid  = require('sendgrid')(
	  process.env.SENDGRID_USERNAME,
	  process.env.SENDGRID_PASSWORD
	);

	sendgrid.send({
	  to: 'florenciamayer@live.com',
	  from: email,
	  subject: 'from ' + name + ' using contact form on florenciamayer.com',
	  text: body
	}, function(err, json) {
	if (err) { return console.error(err); }
	  console.log(json);
	  res.redirect('/thankyou#contact');
	});

});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

