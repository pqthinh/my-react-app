const express = require('express')
const app =express()

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.get("/customer", (req, res)=>{
    res.json({ message:'Test api customer'})
})

app.listen(4000, ()=>{
    console.log("App running at port 4000")
})

module.exports = app