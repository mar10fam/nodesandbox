const url = require('url')
//the URL module splits up a web address into readable parts

const address = 'http://localhost:3000/default.htm?year=2017&month=february'
const q = url.parse(address, true)

console.log(q.host)
console.log(q.pathname)
console.log(q.search)

const qdata = q.query
console.log(qdata.month)