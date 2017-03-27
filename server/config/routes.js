var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
var Questions = require('./../controllers/questions.js');
var Answers = require('./../controllers/answers.js');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.post('/users/:id', Users.update);
	app.post('/users/destroy/:id', Users.destroy);
	app.post('/sessions', Users.login);
	app.post('/questions', Questions.create);
	app.get('/questions', Questions.index);
	app.get('/questions/:id', Questions.find);
	app.post('/answers', Answers.create);
	app.get('/answers', Answers.index);
	app.get('/answers/:id', Answers.find);
	app.patch('/answers/:id', Answers.like);
}
