const express = require("express")
const dotenv = require("dotenv").config()
const app = express();

const port = process.env.PORT || 5000;

app.get("/api/contacts",(req, res)=>{
    res.send("get all the contacts")
})

app.listen(port,()=>{console.log("hello my name id fazli,"+port+"all");})