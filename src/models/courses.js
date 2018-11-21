const mongoose = require('mongoose');
const { Schema } = mongoose;

const courses = new Schema({
    name:{
        required:true,
        type:String,
        minlength:3
    },
    id_mentors:{
        required:true,
        type:Array
    },
    id_koders:{
        required:true,
        type:Array
    }
});

module.exports = {
    model:mongoose.model('courses',courses),
    courses
}