app.factory('QuestionFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/questions').then(callback);
	}

	factory.find = function(id, callback){
    $http.get('/questions/' + id).then(callback)
  }

	factory.create = function(newQuestion, callback){
		$http.post('/questions', newQuestion).then(callback);
	}


	return factory;
})
