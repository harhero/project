const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  paymetnID:{
    type:mongoose.Schema.Types.ObjectId,
    index:true,
    unique:true
  },
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
  amount: { 
    type: Number, 
    required: true,
    min: 0 
  },
  paymentMethod: { 
    type: String, 
    required: true, 
    enum: ['debit card','cradit card'],
    trim: true 
  },
  paymentDate: { 
    type: Date, 
    Default: Date.Now 
  },
  status: { 
    type: String, 
    enum: ['Paid', 'Pending', 'Failed'], 
    default: 'Pending' 
  }
}, 
{
  timestamps: true
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;