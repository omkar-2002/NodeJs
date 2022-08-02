const express = require("express")

const app = express()

app.use((req,res,next)=>{
    console.log("MIDDLEWARE")
    next()
})

app.use((req,res,next)=>{
    res.send(`<form method = "POST"><input type = "text" name = "username"> <button type = "submit">Create User</button></form>`)
})

app.listen(8080)