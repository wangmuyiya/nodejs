const fs = require('fs')
const path = require('path')


const fillPath = path.resolve(__dirname,'text.txt')


const fd = fs.openSync(fillPath,'a')

fs.writeSync(fd,'冲冲冲，加油.')

fs.closeSync(fd)
 