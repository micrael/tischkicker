var mongo = require('mongodb');

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.16.64.58:27017/tischkicker');

var Cat = mongoose.model('Goal', { team: String, speed: String });

var restify = require('restify');

function goal(req, res, next) {
  var kitty = new Cat({ team: req.query.team, speed: req.query.speed });
	kitty.save(function (err) {
	  if (err) {
	  	console.error(err);
	  	res.send(500);
	  } else {
	  	res.send(200);
			next();
	  }
	});
}

var server = restify.createServer();
server.use(restify.queryParser());
server.get('/goal', goal);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// var server = http.createServer(app);


// function goal(req, res, next) {

//   res.send({ message: 'Hello Tischkickers', hans: 'true' });
//   next();
// }

// app.get('/goal', goal );



// server.listen(8888, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// });