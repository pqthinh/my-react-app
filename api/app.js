// import './server/connect'
const express = require('express')
const app =express()
const mysql =  require('mysql')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
})

conn.connect((err)=>{
    if(err) throw err
    console.log('Connected to database')
})

app.get('/', (req,res)=>{
    res.json({send:"Hello world"})
})

app.get('/test', (req, res)=>{
    res.json({ message:'Test api customer'})
})

app.get('/customer', (req, res)=>{
    let sql =  "select * from customer order by 1"
    conn.query(sql,(err, result)=>{
        if (err ) throw err
        res.json({customer: result})
    })
})
app.get('/customer/:id', (req,res)=>{
    let id= req.params.id
    let sql = `select * from customer where id=${id+1}`
    console.log(sql)
    conn.query(sql, (err, result)=>{
        if(err) console.log(err)
        res.json({customer: result})
    })
})
app.post('/customer/add', (req, res)=>{
    // window.alert(req.body)
    console.log(req.body)
    let name = req.body.name
    let phone = req.body.phone
    let email = req.body.email
    let address = req.body.address
    let sta = req.body.status
    console.log(`${name}    +   ${phone} +    ${email}`)
    let sql =`insert into customer(name,phone, email, address, status) values ('${name}', '${phone}','${email}','${address}','${sta}')`
    console.log(sql)
    conn.query(sql, (err, result)=>{
        if(err) throw err
        res.json({customer: result})
    })
})

app.listen(4000, ()=>{
    console.log("App running at port 4000")
})

module.exports = app