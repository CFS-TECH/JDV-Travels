import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import enquiryRoutes from './routes/enquiries.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, db: mongoose.connection.readyState === 1 });
});

app.use('/api/enquiries', enquiryRoutes);

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err.message));
} else {
  console.warn('MONGO_URI not set — enquiries will not be saved. Copy .env.example to .env.');
}
