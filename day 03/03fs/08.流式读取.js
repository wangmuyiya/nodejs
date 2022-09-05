const fs = require('fs')
const path = require('path')

// const fillPath = path.resolve(__dirname,'text.txt')
const fillPath = path.resolve(__dirname,'01.wmv')

const rs = fs.createReadStream(fillPath)

rs.on('data',(chunk)=>{
    console.log(chunk)
})