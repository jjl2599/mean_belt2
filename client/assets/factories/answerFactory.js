app.factory('AnswerFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/answers').then(callback);
	}

	factory.create = function(newAnswer, callback){
		$http.post('/answers', newAnswer).then(callback);
	}

  //factory.like{}

	return factory;
})
