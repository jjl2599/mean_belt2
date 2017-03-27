var mongoose = require('mongoose');

var AnswerSchema = mongoose.Schema({
  author:{
    type: String,
    require: true
  },
  _question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },
	answer: {
		type: String,
		required: true,
		minlength: [5, "Your answer should have at least have 5 characters."]
	},
  details:{
    type: String,
  },
  likes: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

mongoose.model('Answer', AnswerSchema);
