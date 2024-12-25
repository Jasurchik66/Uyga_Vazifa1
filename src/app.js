import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
app.use(express.json());


app.use('/books', bookRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/library')
  .then(() => console.log('MongoDB-ga muvaffaqiyatli ulandi'))
  .catch((error) => console.error('MongoDB-ga ulanishda xatolik:', error));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});