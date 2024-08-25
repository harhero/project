const { default: mongoose } = require ("mongoose");

const Userschema = new mongoose.Schema ({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        index:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phonenumber:{
        type:String,
        require:true
    },
    Address:{
        type:String,
    },
    profilepicture:{
        type:String
    },
    usertype:{
        type:String,
        enum:['task poster','tasker'],
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    registrationdate:{
        type:Date,
        default:Date.new
    },
  },  {
 timestamps: true
});

const user = mongoose.model('User', Userschema);

module.export = user;