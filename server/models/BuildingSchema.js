import mongoose from "mongoose";

const BuildingSchema = new mongoose.Schema({
    name: String,
    address: String, 
    total_floors:Number,
    last_updated:Date
})
const Buildings = mongoose.model('Buildings',BuildingSchema)
export default Buildings;