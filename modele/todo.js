const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
       
    },

    complated:{
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Todo', TodoSchema) 