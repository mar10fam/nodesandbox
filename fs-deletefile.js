const fs = require('fs')

const del = fs.unlink('delete.txt', (err) => {
    if(err) console.error(err)
    console.log('File has been deleted!')
})
