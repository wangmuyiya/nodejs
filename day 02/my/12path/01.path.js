const path = require('path')

const  fillPath1 = path.resolve('../11process/index.js')
console.log(fillPath1)


const fillPath2 = path.resolve('../11process','one.txt')
console.log(fillPath2)


const fillPath3 = path.resolve(__dirname,'two.txt','three.txt')
console.log(fillPath3)