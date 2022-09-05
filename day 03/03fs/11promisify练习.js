const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname, 'text.txt')
const {promisify} = require('util')

const open = promisify(fs.open)
const write = promisify(fs.write)
const close = promisify(fs.close)
// 04优化+优化

async function fn() {
    const fd = await open(fillPath,'a');

    await write(fd,'gogogo');

    const re =await close(fd);


    return '结束'
}

fn()
.then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.log(err)
})