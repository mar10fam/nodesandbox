const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    const date = url.parse(req.url, true).query
    res.end(`${date.year} ${date.month}`)
})
//localhost:3000/?year=2022&month=2022

server.listen(3000)