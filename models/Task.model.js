const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  UserID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  tsakID: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'tasker',
     required: true
  },
  title: { 
    type: String, 
    required: true, 
    trim: true
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category', 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  budget: { 
    type: Number, 
    required: true, 
    min: 0  
  },
  DueDate: { 
    type: Date, 
    required: true 
  },
  createdDate: { 
    type: Date, 
    Default:Date.Now
  },
  status: { 
    type: String, 
    enum: ['Open', 'in progress', 'Completed', 'Cancelled'], 
    default: 'Open' 
  }
}, {
  timestamps: true 
});


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
