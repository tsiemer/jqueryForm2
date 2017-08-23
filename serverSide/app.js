var restify = require('restify');
var server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

var people = [];
var currentId = 0;

function Employee(req,res, next){
	currentId++;
	this.id = currentId;
}

function getEmployees(req, res, next){
	res.send(people);
}

function getEmployee(req, res, next){
	
}

server.get('/people', getEmployees);
server.listen(3001, function() {
  console.log('%s listening at %s', server.name, server.url);
});