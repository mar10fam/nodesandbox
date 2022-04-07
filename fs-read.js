const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    fs.readFile('file-system-html.html', (err, data) => {
        if(err) console.error(err)
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(3000)

