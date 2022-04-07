const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.appendFile('startwatch.txt', 'someone has accessed the server\n', (err) => {
        if(err) console.error(err)
        res.end('Hello World')    
    })
    
})

server.listen(3000)