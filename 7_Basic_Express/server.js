
const express=require("express");
const path=require("path");

const app=express();

app.use(function(req,res,next){
    console.log("hello");
    next();
})

app.listen(3000,function (){
    console.log("Server Started");
})

app.get("/",function(req,res){

    res.sendFile(path.join(__dirname,"mydata.html"));
})

app.get("/subscribe",function(req,res){

    res.sendFile(path.join(__dirname,"subscribe.html"));
})

app.post("/subscribe",(req,res)=>{
    res.send("Account Created");
})


