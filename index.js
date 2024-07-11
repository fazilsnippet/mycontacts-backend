const express = require("express")
require("dotenv").config()
const app = express();
const port = 4000

app.get('/fazil',(req,res)=>{
    res.send('Hello, My Name is Fazli!')
})

app.listen(process.env.PORT,()=>{
    console.log("this is listening on ,"+port+"yse")
})
