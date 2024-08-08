import express from "express";



const PORT=5000;
const app=express();




app.get("/category",(req,res)=>{
    res.send("Hello World");
})
