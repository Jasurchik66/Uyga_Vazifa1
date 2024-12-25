import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Kitob nomi kiritilishi shart"],
  },
  author: {
    type: String, 
    required: [true, "Muallif kiritilishi shart"],
  },
  publishYear: {
    type: Number,
  },
  pages: {
    type: Number,
  },
  copiesAvailable: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export const Book = mongoose.model('Book', bookSchema);