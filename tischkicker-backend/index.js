var mongo = require('mongodb');

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.16.64.135:27017/tischkicker');
//mongoose.connect('mongodb://172.16.64.58:27017/tischkicker');

var Goal = mongoose.model('Goal', { team: String, speed: String });

var restify = require('restify');

function goal(req, res, next) {
  var kitty = new Goal({ team: req.query.team, speed: req.query.speed });
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
function getGoals(req, res, next) {
	 Goal.find({}, function(err, goals) {
    var goalMap = {};

    goals.forEach(function(goal) {
      goalMap[goal._id] = goal;
    });

    res.send(goalMap);  
  });
}

var server = restify.createServer();
server.use(restify.queryParser());
server.get('/goal', goal);
server.get('/goals', getGoals);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
