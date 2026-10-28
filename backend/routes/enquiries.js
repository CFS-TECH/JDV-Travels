import { Router } from 'express';
import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';

const router = Router();

router.post('/', async (req, res) => {
  const { type, name, phone } = req.body || {};
  if (!['quick', 'contact'].includes(type) || !name?.trim() || !/^\d{10}$/.test((phone || '').replace(/\D/g, '').slice(-10))) {
    return res.status(400).json({ error: 'Valid type, name and 10-digit phone are required.' });
  }
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: 'Database not connected.' });
  }
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const list = await Enquiry.find().sort({ createdAt: -1 }).limit(200);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
