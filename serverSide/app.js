var restify = require('restify');
var server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

var employees = [{"firstname":"Trinity","lastname":"Siemer"}];
var currentId = 0;

function Employee(req,res, next){
	currentId++;
	this.id = currentId;
}

function getEmployees(req, res, next){
	res.send(employees);
}

function postEmployee(req,res, next){
	var employee = new Employee();

	employee.firstname = req.body.firstname;
	employee.lastname = req.body.lastname;

	res.send(employee);
	console.log(employee)
}
function getEmployee(req, res, next){
	
}

server.get('/people', getEmployees);
server.get('/people/:id', getEmployee);
server.post('/people', postEmployee);

server.listen(3001, function() {
  console.log('%s listening at %s', server.name, server.url);
});