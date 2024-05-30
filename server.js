const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit: '2000mb',extended:true}));

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Pandi@0602',
    database:'test_user'
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Conneted to MySql server..,')
})

const port = 3009
const host = "localhost"

require('./routes/routes')(app)



app.listen(port,()=>{
    console.log("server running on "+host+":"+port)
})