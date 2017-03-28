var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = {
  like: function(req,res){
    Answer.findById(req.params.id).exec(function(err,answer){
      if(err){
        return res.json(err);
      }
      if(!answer){
        return res.json({
          "errors": "invald answer"
        })
      }
      console.log('before: ', answer);
      console.log("Like incremented")
      answer.likes++;
      answer.save(function(err,answer){
        if(err){
          return res.json(err);
        }
        console.log('after: ', answer);
        return res.json(answer);
      })
    })
  },

  find: function(req,res){
    Answer.findById(req.params.id, function(err,answer){
      if(err){
        return res.json(err)
      }
      else{
        return res.json(answer)
      }
    })
  },

  index: function(req,res){
    Answer.find({}).populate('answers').exec(function(err,doc){
      if(err){
        return res.json(err);
      }
      return res.json(doc);
    })
  },
  create: function(req, res){
		var answer = new Answer(req.body);
		answer.save(function(err, answer){
			if(err){
				return res.json(err);
			}
      Question.findById(req.body._question, function(err,question){
        if(err){
          return res.json(err);
        }
        if(!question){
          return res.json({
            "errors": "invald question"
          })
        }
        question.answers.push(answer._id);
        question.save(function(err,question){
          if(err){
            return res.json(err);
          }
          return res.json(answer);
        })
			})
		})
	}

}
