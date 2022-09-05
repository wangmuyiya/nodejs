const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname,'text.txt')

fs.writeFile(fillPath,'月薪30K',{flag:'a'},(err)=>{

    if(err){
        return
    }

    console.log('写入成功')
})