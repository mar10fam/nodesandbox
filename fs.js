const fs = require('fs')

const content = 'Some content!'

fs.writeFile('Users/martin/Desktop/cs/Tutorials/nodesandbox' , content, err => {
    if(err){
        console.error(err)
        return
    }

})