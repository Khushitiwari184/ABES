const express = require('express');
//const path=require('path');
const app=express();
const port=3000;

app.use(express.json());//middleware
// const adi=[{
//     name:"khushi",//json array

// }]
// app.get('/',(req,res)=>{//normal api
//    // app.get('/api',(req,res)=>{ rest api
//     res.send("this is my home page");
// })
// app.get('/home',(req,res)=>{
//     //res.send("this is my about page")
//     //res.json(adi); //print
//     res.sendFile(path.join(__dirname,"home.html"));

// })
// app.get('/about',(req,res)=>{
    
//     res.sendFile(path.join(__dirname,"aboutus.html"));

// })
// app.get('/contact',(req,res)=>{
    
//     res.sendFile(path.join(__dirname,"contact.html"));

// })
app.post('/api/abes',(req,res)=>{
    console.log("body is --",req.body)
    res.json({})
})


app.listen(port,()=>{
    console.log(`app is run at:${port}`);
})
