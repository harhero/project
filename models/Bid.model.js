const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
    BidID: {
      type:mongoose.schema.types.objectID,
      index:true,
      unique:true
    },
  taskId: {
    type: mongoose.Schema.Types.objectID,
    ref: 'Task',   
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   
    required: true
  },
  BidAmount: {
    type: mongoose.Schema.Types.ObjectId,   
    required: true
  },
  BidDate: {
    type: Date,
    default: Date.now   
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],  
    default: 'Pending'
  }
})

 
const Bid = mongoose.model('Bid', BidSchema);

module.exports = Bid;
