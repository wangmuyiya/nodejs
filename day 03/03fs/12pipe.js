const fs = require('fs')
const path = require('path')

const fillPath1 = path.resolve(__dirname,'01.wmv')
const fillPath2 = path.resolve(__dirname,'02.wmv')

const rs = fs.createReadStream(fillPath1)
const ws = fs.createWriteStream(fillPath2)

rs.pipe(ws)

ws.on('close',()=>{
    console.log('文件写入成功，关闭')
})

