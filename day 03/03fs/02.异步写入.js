const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname,'text.txt')

fs.open(fillPath,'a',(err,fd)=>{
    if(err){
        return
    }
    // 打开之后再写入
    fs.write(fd,'加油哦！！！',(err)=>{

        if(err){
            return
        }


        // 写入之后再关闭
        fs.close(fd,(err)=>{
            if(err){
                return
            }
            console.log('文件关闭成功')
        })
    })


})


console.log('123')