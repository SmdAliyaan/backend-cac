import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({},{timestamps:true})



export const Todo = mongoose.model('Todo',todoSchema)

// in db it will look like this 'todos'