
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
app.get('/blog', routes.blog);


var sendgrid  = require('sendgrid')(
  process.env.app19440467@heroku.com,
  process.env.SENDGRID_PASSWORD
);

sendgrid.send({
  to: 'vachos@me.com',
  from: 'florenciamayer@live.com',
  subject: 'Hello World',
  text: 'Sending email with NodeJS through SendGrid!'
}, function(err, json) {
if (err) { return console.error(err); }
  console.log(json);
});





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

