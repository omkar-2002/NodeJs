const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("INCOMING REQUEST")
    console.log(req.method,req.url)

    if(req.method == "POST"){
        let body = ''
        req.on('end',()=>{
            console.log(body)
            const userName = body.split('=')[1]
            res.end(`<h2>Hey ${userName} </h2>`)
        })
        req.on('data',(chunk)=>{
            body += chunk
        })
    }else{
        res.setHeader("Content-Type","text/html")
        res.end(`<form method = "POST"><input type = "text" name = "username"> <button type = "submit">Create User</button></form>`);
    }
    // This convert the response you are sending into a text format
   
})

server.listen(5000)