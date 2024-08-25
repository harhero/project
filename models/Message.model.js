const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  messageID:{
    type:mongoose.Schema.Types.ObjectId,
    index:true,
    unique:true
  },
  senderID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  receiverID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  taskID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Task', 
    required: true 
  },
  content: { 
    type: String, 
    required: true, 
    trim: true, 
    maxlength: 1000
  },
  timestamp: { 
    type: Date, 
    default: Date.Now 
  },
  status: { 
    type: String, 
    enum: ['Read', 'Unread'], 
    default: 'Unread'
  }
}, {
  timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
