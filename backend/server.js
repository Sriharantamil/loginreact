
const express=require("express");
const app=express()
const mongoose=require("mongoose");
var bodyParser = require("body-parser");


var cors = require('cors');
const UserData = require("./userDetails");
const StakeData = require('./StakeData')
const DocContent=require("./Document_content")
const TSAData=require("./TSA.js")
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.json());

// const mongoUrl="mongodb+srv://sriharan:sriharan@cluster0.nua27az.mongodb.net/?retryWrites=true&w=majority";
const mongoUrl="mongodb://localhost:27017/reacttecnico";
mongoose.connect(mongoUrl)
.then(() =>{
    console.log("connected to database");
})
.catch((e)=>console.log(e));
const User=mongoose.model("UserInfo");
app.post("/signup",async(req,res) =>{
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var access=req.body.access;
    // var selectedaccess=req.body.selectedaccess;
    try {
        const oldUser=await User.findOne({email});
        if (oldUser) {
            return res.json({error :"user exists"});
        }
        await User.create({
            username,
            email,
            password,
            access
            // selectedaccess
        });
        res.send({status:"ok"});
        
    } catch (error) {
        res.send({status:"error"})
        
    }
});

var db = mongoose.connection

app.post("/create_collection",(req,res)=>{
    var databaseName = req.body.databaseName
    var data = {"databaseName":databaseName}
    db.collection(databaseName).insertOne(data,(err,collection)=>{
        if(err){
           print(err)
        }
        console.log("Record Inserted Successfully");
    });
})

app.post("/create_project",(req,res)=>{
    var projectName = req.body.projectName
    var data = {"projectName":projectName}
    db.collection(projectName).insertOne(data,(err,collection)=>{
        if(err){
           print(err)
        }
        console.log("Record Inserted Successfully");
    });
})
app.get('/signup/get', (req,res) => {
    UserData.find({username:"sriharan"}).then((err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }

    })
})
app.get('/docdata/get', (req,res) => {
    DocContent.find().then((err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }

    })
})

app.get('/stake/get', (req,res) => {
    StakeData.find().then((err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})

app.get('/TSA/get', (req,res) => {
    TSAData.find().then((err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})

app.listen(8080,()=>{
    console.log("server started");
});