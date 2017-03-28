var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = {
  index: function(req,res){
    Question.find({}).exec(function(err,questions){
      if(err){
        return res.json(err);
      }
      else{
        return res.json(questions)
      }
    })
  },
  find: function(req,res){
    Question.findById(req.params.id).populate('answers').exec(function(err,question){
      if(err){
        return res.json(err)
      }
      else{
        return res.json(question)
      }
    })
  },
  create: function(req, res){
    User.findById(req.params.id , function(err, user){
      var question = new Question(req.body);
      question.save(function(err,question){
        if(err){
          return res.json(err);
        }
        else{
          return res.json(question);
        }
      })
    })
  },


}
