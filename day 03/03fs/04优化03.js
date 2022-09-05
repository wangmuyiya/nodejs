const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname, 'text.txt')

function open(){
   return new Promise((resolve, reject) => {
        fs.open(fillPath, 'a', (err, fd) => {
            if (err) {
                reject(err)
                return
            }

            resolve(fd)
        })
    })
}



function write(fd){
  return  new Promise((resolve,reject)=>{
        fs.write(fd,'为了明天而战~~~',(err)=>{
            if(err){
                reject(err)
                return
            }
            resolve()
        })
    })
}


function close(fd){
   return new Promise((resolve,reject)=>{
        fs.close(fd,(err)=>{
            if(err){
                reject(err)
                return
            }
             
            resolve('结束')
        })
    })
}



async function fn() {
    const fd = await open();

    await write(fd);

    const re =await close(fd);


    return re
}

fn()
.then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.log(err)
})