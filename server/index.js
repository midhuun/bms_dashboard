import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Resident from './models/ResidentsModel.js';
import Contractor from './models/ContractorsModel.js';
import Case from './models/CaseModel.js';
import WorkOrder from './models/WorkOrders.js';
import Buildings from './models/BuildingSchema.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(cors({
  origin: 'http://localhost:5173',
  methods:["GET"]
}));
const port =  process.env.PORT  || 3000;

const uri = process.env.MONGODB_URI;
async function connectToMongo() {
  try {
    await mongoose.connect(uri);
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

app.get('/',async(req,res)=>{
  const workOrders = await WorkOrder.find().populate('contractor');
    const cases = await Case.find();
    const resident = await Resident.find();
    const contractor = await Contractor.find();
    const buildings = await Buildings.find();
    const datas={cases,resident,contractor,workOrders,buildings}
    res.json(datas);
})
connectToMongo();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
