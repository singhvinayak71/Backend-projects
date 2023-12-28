const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req,res) =>{
    res.send("Hello and welcome to my home page")
})

app.get('/contact', (req, res) =>{
    res.send('<h2>Hello and welcome to my contact page</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})