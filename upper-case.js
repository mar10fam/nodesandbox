const uc = require('upper-case')
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc.upperCase('hello world'))
    res.end()
})

server.listen(3000)