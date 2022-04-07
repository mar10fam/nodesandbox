const fs = require('fs')

const content = '1\n'
const add = '2\n'

fs.appendFile('new.txt', content, err => {
    if(err){
        console.error(err)
        return
    }
})

fs.appendFile('new.txt', add, err => {
    if(err){
        console.error(err)
        return
    }
})