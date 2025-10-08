const http = require('http')
const fs = require('fs')

    const server = http.createServer((req,res)=>{
        fs.readFile('dashboard.html', ((error,data)=> {
            if(error){
                res.writeHead(404)
                res.write('caught an error')
            }else{
                res.writeHead(200,{'Content-Type' : 'text/html'})
                res.write(data)
            }
            res.end()
        }))

        })
                server.listen(3000, ()=>{
            console.log('running on server 3000')
    })