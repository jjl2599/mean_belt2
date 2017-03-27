app.controller('QuestionsController',['QuestionFactory', 'UserFactory', 'AnswerFactory','$location', '$routeParams', function(QuestionFactory, UserFactory, AnswerFactory, $location, $routeParams){
	var self = this;
	self.errors = [];
	self.questions = [];

	self.index = function(){
		QuestionFactory.index(function(res){
			self.questions = res.data;
		});
	}

	self.find = function(){
		QuestionFactory.find($routeParams.id, function(question){
      self.question = question.data
			// self.answer =
		})
	}

	self.create = function(newQuestion){
		newQuestion.author = UserFactory.current_user.firstname;
		QuestionFactory.create(newQuestion, function(res){
			self.index();
			self.newQuestion = {};
			self.errors = []
			$location.url('/main')
		})
	}

	// self.getAnswers = function(){
	//
	// }

}]);
