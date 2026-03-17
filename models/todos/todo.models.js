import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true, 
    },

    complete:{
        type: Boolean,
        default: false
    },

    createdBy: {
        type: mongoose.Schema.Types.Objectid,
        ref: 'User',
        required: true
    },

    subTodos: [{
        type: mongoose.Schema.Types.Objectid,
        ref: 'Todo'
    }]
},{timestamps:true})



export const Todo = mongoose.model('Todo',todoSchema)

// in db it will look like this 'todos'