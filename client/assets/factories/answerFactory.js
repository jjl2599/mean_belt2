app.factory('AnswerFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/answers').then(callback);
	}

	factory.find = function(id, callback){
    $http.get('/answers/' + id).then(callback)
  }

	factory.create = function(newAnswer, callback){
		$http.post('/answers', newAnswer).then(callback);
	}

	factory.like = function(id, callback){
		$http.patch(`/answers/${id}`).then(callback);
	}


	return factory;
})
