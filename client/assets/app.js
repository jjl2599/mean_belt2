var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/new_users.html',
    controller: 'UsersController as UC'
  })
  .when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'UsersController as UC'
  })
  .when('/createquestion', {
    templateUrl: 'partials/newquestion.html',
    controller: 'QuestionsController as QC'
  })
  .when('/question/:id', {
    templateUrl: 'partials/question.html',
    controller: 'QuestionsController as QC'
  })
  .when('/question/:id/answer', {
    templateUrl: 'partials/newanswer.html',
    controller: 'AnswersController as AC'
  })
  .otherwise('/')
})
