const mongoose = require('mongoose');

const User = new mongoose.Schema({
    _id:{
        type:String,
        required: true,
        unique:[true, 'ID ALREADY EXIST']
    },
    admin:{
        type:Boolean,
        default:false,
        required:[true, 'ERROR, THE FIELD ADMIN IS MISSING']
    },
    name:{
        fristName:{
            type:String,
            required:true
        },
        secondName:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
        required:true,
        unique:[true, 'EMAIL ALREADY EXIST']
    },
    senha:{
        type:String,
        required:true,
        minlength:[7, 'YOUR PASSWORD MUST HAVE AT LEAST 7 CARACTERS']
    },
});