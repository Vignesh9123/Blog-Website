const mongoose = require('mongoose');

// Define schema for comments
const commentSchema = new mongoose.Schema({
  id: {
    type:Number,
    // required: true
  },
  postId: {
    type:Number,
    required: true
  },
  author: {
    type: String,
    required: true,
    default:"Unknown"
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

// Create Comment model
export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);


