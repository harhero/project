const {default: mongoose } = require("mongoose");

const Taskassignmentschema = new mongoose.Schema({
    assignmentID:{
        type:mongoose.Schema.Types.ObjectId,
        index:true,
    },
    taskID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true                                                                   
    },
    taskerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    assignmentDate:{
        type: Date,
        required: true,
        default: Date.new
    },
    completionDate:{
    },
    status:{
        type:String,
        enum:['assigned','completed','canceled'],
    },

});


const Taskassignment = mongoose.model('taskassignment', Taskassignmentschema);

model.exports = Taskassignment;
