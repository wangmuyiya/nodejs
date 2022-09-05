const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname,'text.txt')
/* const p1 = new Promise((resolve,reject)=>{
    fs.readFile(fillPath,(err,re)=>{
        if(err){
            reject(err)
            return
        }
        resolve(re)
    })
})

p1.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
 */
const {promisify} = require('util')

const readFile = promisify(fs.readFile)

// console.log(readFile)

readFile(fillPath)
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})