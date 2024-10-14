import mongoose from "mongoose";
const contractorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true }, // e.g., Electrical, Plumbing
    contact_info: {
      phone: { type: String, required: true },
      email: { type: String, required: true }
    },
    insurance_status: { type: String, enum: ['Valid', 'Expired'], default: 'Valid' },
    last_work_order: { type: Date, default: Date.now },
    work_orders_assigned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkOrder' }]
  });
  
 const Contractor = mongoose.models.Contractor || mongoose.model('Contractor', contractorSchema);
 export default Contractor;
  