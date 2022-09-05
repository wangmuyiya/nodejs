const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname,'text.txt')

fs.readFile(fillPath,(err,re)=>{
    if(err){
        return
    }
    console.log(re)
    console.log(re.toString())
})