import mongoose from 'mongoose';

// Create a schema
const TodoSchema = new mongoose.Schema({
  name: String,
  completed: {type: Boolean, default: false},
  note: String,
  updatedAt: {type: Date, default: Date.now}

});

// Create a model based on the schema
export default mongoose.model('Todo', TodoSchema)
