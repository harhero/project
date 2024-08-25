const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  taskID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Task', 
    required: true
  }, 
  userID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  offeredAmount: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  message: { 
    type: String, 
    trim: true,
    maxlength: 500 
  },
  status: { 
    type: String, 
    enum: ['Accepted', 'Rejected', 'Pending'], 
    default: 'Pending'
  },
  offerDate: { 
    type: Date, 
    Default: Date.Now 
  }
}, 
{
  timestamps: true
});

const offer = mongoose.Model('Offer', OfferSchema);

module.exports = Offer;