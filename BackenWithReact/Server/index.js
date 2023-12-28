const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello this is my home page")
})

app.get('/contact', (req, res) =>{
    res.send("<h2>Hello this my contact page</h2>")
})
let jokes = [
    {
        id:1,
        joke: "This is joke 1"
    },
    {
        id:2,
        joke: "This is joke 2"
    },
    {
        id:3,
        joke: "This is joke 3"
    },
    {
        id:4,
        joke: "This is joke 4"
    },
    {
        id:5,
        joke: "This is joke 5"
    },

]

app.get('/jokes', (req, res)=>{
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`This server is on port No. ${port }`)
})