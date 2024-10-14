import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  case_id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Active', 'Completed', 'Overdue', 'Open', 'In Progress'], default: 'Pending' },
  severity: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  related_work_order: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkOrder' }, 
  due_date: { type: Date },
  last_updated: { type: Date, default: Date.now },
  date_created: { type: Date, default: Date.now },
  resident: { type: mongoose.Schema.Types.ObjectId, ref: 'Resident' },
  contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'Contractor' },
  building: { type: mongoose.Schema.Types.ObjectId, ref: 'Building', required: true } 
});

const Case = mongoose.models.Case ||mongoose.model('Case', caseSchema);

export default Case;
