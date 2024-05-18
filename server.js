const express = require('express')
const app = express()



const port = 3009
const host = "localhost"


app.listen(port,()=>{
    console.log("server running on"+host+":"+port)
})