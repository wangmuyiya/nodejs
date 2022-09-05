const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname,'text.txt')

const fd = fs.createWriteStream(fillPath,{flag:'a'})


fd.on('open',()=>{
    console.log('流式开启，开始写入')
})

fd.on('close',()=>{
    console.log('关闭写入')
})

fd.write('长亭外，古道边')
fd.write('芳草碧连天')

fd.close()
