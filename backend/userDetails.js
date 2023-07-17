const mongoose=require("mongoose");
const UserDetailsSchema=new mongoose.Schema(
    {
        username:String,
        email:{type:String, unique:true},
        password:String,
        access:String
    },
    {
        collection:"UserInfo",
    }
);
const UserData = mongoose.model("UserInfo",UserDetailsSchema);
module.exports = UserData;