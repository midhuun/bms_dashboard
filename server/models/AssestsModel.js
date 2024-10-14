import mongoose from "mongoose";
const assetSchema = new mongoose.Schema({
    asset_name: { type: String, required: true },
    asset_type: { type: String, required: true }, 
    location: { type: String, required: true },
    status: { type: String, enum: ['Working', 'Under Maintenance'], default: 'Working' },
    maintenance_due: { type: Date, required: true },
    assigned_contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'Contractor' }
  });
  
  export const Asset = mongoose.model('Asset', assetSchema); 