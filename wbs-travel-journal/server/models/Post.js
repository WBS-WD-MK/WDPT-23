import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: [true, 'Title is required'] },
  author: { type: Schema.ObjectId, ref: 'User', required: [true, 'Author is required'] },
  image: { type: String, required: [true, 'Cover image is required'] },
  content: { type: String, required: [true, 'Body is required'] },
  date: { type: Date, default: Date.now },
});

export default model('Post', postSchema);
