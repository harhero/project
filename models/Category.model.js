const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryID: {
      type:mongoose.Schema.Types.ObjectId,
      index:true,
      unique:true
          },
  categoryName: { 
    type: String, 
    required: true,  
    unique: true,  
    trim: true,  
    maxlength: 100 
  },
  description: { 
    type: String, 
    trim: true, 
    maxlength: 500  
  }
}, {
  timestamps: true 
});

 
const Category = mongoose.model('Category', CategorySchema);