import mongoose from "mongoose";
const residentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  apartment_number: { type: String, required: true },
  contact_info: {
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  last_updated: { type: Date, default: Date.now },
  maintenance_requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkOrder' }]
});

const Resident = mongoose.models.Resident || mongoose.model('Resident', residentSchema);
export default Resident;

