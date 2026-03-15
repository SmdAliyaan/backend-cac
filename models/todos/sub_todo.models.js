import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    // {
    //     username: String,
    //     email: String,
    //     isActive: Boolean
    // }


    // or more professional way

    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        isActive: {
            type: Boolean,
            default: true
        },

        password: {
            type: String,
            // required: true
            // or
            required: [true, 'Password is required'],
        }
    },

    {timestamps: true}  // this will automatically add createdAt and updatedAt fields to the schema

)

export const User = mongoose.model('User',userSchema)
