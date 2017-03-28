var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  author:{
    type: String,
    required:true
  },
	question: {
		type: String,
		required: true,
		minlength: [10, "Your question should have at least have 10 characters."]
	},
  description: {
    type: String,
    required: false,
  },
  answers: [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  }]
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
