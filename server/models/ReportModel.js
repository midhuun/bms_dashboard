const reportSchema = new mongoose.Schema({
    report_id: { type: String, required: true },
    report_name: { type: String, required: true },
    generated_on: { type: Date, default: Date.now },
    download_link: { type: String, required: true }
  });
  
const Report = mongoose.models.Report || mongoose.model('Report', reportSchema);
export default Report