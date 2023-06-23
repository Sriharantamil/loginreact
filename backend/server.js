const express=require("express");
const app=express()
const mongoose=require("mongoose");
var bodyParser = require("body-parser");

var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.json());

// const mongoUrl="mongodb+srv://sriharan:sriharan@cluster0.nua27az.mongodb.net/?retryWrites=true&w=majority";
const mongoUrl="mongodb://localhost:27017/reacttecnico";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log("connected to database");
})
.catch((e)=>console.log(e));
require("./userDetails");

const User=mongoose.model("UserInfo");
app.post("/signup",async(req,res) =>{
    var username=req.body.username;
    var password=req.body.password;
    try {
        await User.create({
            "username":username,
            "password":password
        });
        res.send({status:"ok"});
        
    } catch (error) {
        res.send({status:"error"})
        
    }
});

app.listen(8080,()=>{
    console.log("server started");
});