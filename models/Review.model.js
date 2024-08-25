const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  reviewerID: {
    type:mongoose.Schema.Types.ObjectId,
      index:true,
      unique:true
  },
  taskID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Task', 
    required: true 
  },
  reviewerID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  reviewerID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1,
    max: 5 
  },
  comment: { 
    type: String, 
    trim: true, 
    maxlength: 500 
  },
  reviewDate: { 
    type: Date, 
    Default: Date.Now 
  }
}, {
  timestamps: true 
});


const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
