const fs = require('fs')

fs.writeFile('writefile.txt', 'Text has changed', (err) => {
    if(err) console.error(err)
    console.log('Text has been replaced!')
})
