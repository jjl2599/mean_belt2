app.controller('AnswersController', ["AnswerFactory","UserFactory","QuestionFactory","$location","$routeParams", function(AnswerFactory,UserFactory,QuestionFactory,$location,$routeParams){

	var self = this;
	self.answers = [];

	self.find = function(){
		QuestionFactory.find($routeParams.id, function(question){
      self.question = question.data
		})
	}

	self.index = function(){
		AnswerFactory.index(function(res){
			self.answers = res.data;
		});
	}

	self.like = function(id){
    AnswerFactory.like(id, function(res){
      self.find();
    });
  }

	self.create = function(newAnswer){
		newAnswer.author = UserFactory.current_user.firstname;
		newAnswer._question = $routeParams.id;
		self.errors = []
		AnswerFactory.create(newAnswer, function(res){
			console.log(res);
			if(res.data.code && res.data.code == 11000){
				self.errors.push('The answer must be unique')
			} else
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.index()
				self.newAnswer = {}
				self.errors = []
        $location.url('/main')
			}
		})
	}


}]);
