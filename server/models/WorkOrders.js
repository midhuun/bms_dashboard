import mongoose from "mongoose";
const workOrderSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    resident: { type: mongoose.Schema.Types.ObjectId, ref: 'Resident', required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed','Scheduled'], default: 'Pending' },
    created_at: { type: Date, default: Date.now },
    contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'Contractor', required: true },
    due_date: { type: Date, required: true }
  });
  
 const WorkOrder = mongoose.models.WorkOrder || mongoose.model('WorkOrder', workOrderSchema);
export default WorkOrder;