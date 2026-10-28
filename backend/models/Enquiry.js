import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['quick', 'contact'], required: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    destination: String,
    checkin: String,
    checkout: String,
    stayDays: String,
    guests: String,
    rooms: String,
    budget: String,
    notes: String,
    trip: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model('Enquiry', enquirySchema);
