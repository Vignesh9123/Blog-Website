const mongoose = require('mongoose');

// Define schema for comments
const userSchema = new mongoose.Schema({
  email: {
    type:String,
    required: true
  },
  username: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  }
},{timestamps:true});

// Create Comment model
export default mongoose.models.User || mongoose.model('User', userSchema);


