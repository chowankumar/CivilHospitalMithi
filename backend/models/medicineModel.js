 import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock cannot be negative'],
  },
  expiryDate: {
    type: Date,
    required: true,
  }
}, { _id: false }); // Optional: disables automatic _id for batch objects

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true, // Optional: ensure one document per medicine name
  },
  batches: {
    type: [batchSchema],
    default: []
  }
});

const medicineModel = mongoose.models.medicine || mongoose.model('medicine', medicineSchema);
export default medicineModel;
