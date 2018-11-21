const mongoose = require('mongoose');
const { Schema } = mongoose;

const koders = new Schema({
    name:{
        required:true,
        type:String,
        minlength:3
    },
    age:{
        required:true,
        type:Number,
        minlength:3
    },
    city:{
        required:true,
        type:String,
        minlength:3
    }
});

module.exports = {
    model:mongoose.model('koders',koders),
    koders
}

/*Nombre edad*/
/*curso

*/