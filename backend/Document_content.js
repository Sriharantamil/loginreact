const mongoose=require("mongoose");
const documentcontentSchema=new mongoose.Schema(
    {
        New_SDRL_Code:String,
        Status: String,
        Final_Book: String,
        Document_Category: String,
        Document_Type_Description: String,
        Document_Description: String,
        LCI_Requirement_Reference: String,
        SDRL_Reference: String,
        Project_Code: String,
        OrIginator_Code: String,
        System_Code: String,
        Discipline: String,
        Document_Type: String,
        Sequence_Number: String,
        Prefix: String,
        Meaningful_title_for_Document: String,
        Module_Area_Location: String,
        Definition_of_Quantity: String,
        Accepted_Format: String
    },
    {
        collection:"Document_Content",
    }
);
const DocContent = mongoose.model("Document_Content",documentcontentSchema);
module.exports = DocContent;
