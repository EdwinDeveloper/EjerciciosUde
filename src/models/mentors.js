const mongoose = require('mongoose');
const { Schema } = mongoose;

const mentors = new Schema({
    name:{
        required:true,
        type:String,
        minlength:3
    },
    age:{
        required:true,
        type:Number,
        minlength:3
    }
});

module.exports = {
    model:mongoose.model('mentors',mentors),
    mentors
}