const fs = require('fs')

fs.rename('rename.txt', 'renamed.txt', (err) => {
    if(err) console.error(err)
    console.log('File has been renamed')
})