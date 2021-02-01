import mongoose from 'mongoose'

const User = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
      minlength: [3, 'Username too short!']
    },
    email: {
      type: String,
      required: [true, 'Provide a email!'],
      minlength: [5, 'Email too short!']
    },
    password: {
      type: String,
      required: [true, 'Provide a password.'],
      minlength: [5, 'Password too short!']
    }
})


export default mongoose.models.User || mongoose.model('User', User)
