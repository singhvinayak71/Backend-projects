const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

// app.get('/', (req, res)=>{
//     // res.sendFile(path.join(__dirname, 'index.html'));
//     res.sendFile(path.join(__dirname, 'about.html'));
// });

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
    res.status(200)
})

app.get('/about' , (req,res)=>{
    res.sendFile(path.join(__dirname, 'about.html'));
    // res.status(200)
})
app.get('/contact' , (req,res)=>{
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname, "contact.html"))
    // res.status(200)
})

app.listen(port, ()=>{
    console.log(`server is runing on the port number ${port}`)
})