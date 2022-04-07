//working with a module that is used for working with file uploads.
const formidable = require('formidable')
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/fileupload'){
        const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            const oldpath = files.filetoupload.filepath
            
        })
    }else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end()
    }
    
})

server.listen(3000)