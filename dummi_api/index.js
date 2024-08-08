import express from "express";
import login from "./src/login.js"    



const PORT=5000;
const app=express();

app.use(express.json());

try{
    app.get("/login",login)
}catch(err){
    console.log(err);
}
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})