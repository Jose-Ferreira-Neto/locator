const mongoose = require('mongoose');
const User = new mongoose.Schema({
    name:{
        fristName:{
            type:String, 
            required:[true, 'THE FRISTNAME IS REQUIRED']
        },
        lastName:{
            type:String, 
            required:[true, 'THE SECONDNAME IS REQUIRED']
        }
    },
    admin:{
        type:Boolean, 
        default:false
    },
    age:{
        type:Number, 
        required:[true, 'THE AGE IS REQUIRED']
    },
    email:{
        type:String,
        required:[true, 'THE EMAIL IS REQUIRED'],
        unique:[true, 'THE EMAIL ALREADY EXIST']
    },
    password:{
        type:Number,
        minlength:[9,'THE PASSWORD NEED HAVE AT LAST 7 CHARACTERS']
    }
});

const CreateUser = mongoose.model('user', User);
module.exports = CreateUser;