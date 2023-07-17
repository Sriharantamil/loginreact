const mongoose=require("mongoose");
const TSASchema=new mongoose.Schema(
    {
        New_SDRL_Code: String,
        TSA_Deliverable_Requirement: String,
        TSA_Submit_with_Bid: String,
        TSA_Submit_for_Review_Approval: String,
        TSA_IFI: String,
        TSA_As_Built: String,
        TSA_Final_Data_Submission: String,
        TSA_Document_Chain: String,
        TSA_DFO: String,
        TSA_IFS_DMS: String,
        TSA_IFS_CMMS: String,
        TSA_AVEVA_NET: String
},
    {
        collection:"TSA",
    }
);
const TSAData = mongoose.model("TSA",TSASchema);
module.exports = TSAData;
