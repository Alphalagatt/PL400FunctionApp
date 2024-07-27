const express = require("express");
const port = 3000;
const app = express();


app.get("/",(req,res,next)=>{
    res.status(200).json({
        message:"It works!!"
    });
});


app.listen(port,()=>{
    console.log("it works");
});