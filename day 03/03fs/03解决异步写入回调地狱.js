const fs = require('fs')
const path = require('path')

const fillPath = path.resolve(__dirname, 'text.txt')


async function fn() {
    const fd = await new Promise((resolve, reject) => {
        fs.open(fillPath, 'a', (err, fd) => {
            if (err) {
                reject(err)
                return
            }

            resolve(fd)
        })
    });

    await new Promise((resolve,reject)=>{
        fs.write(fd,'为了明天而战~~~',(err)=>{
            if(err){
                reject(err)
                return
            }
            resolve()
        })
    });

    const re = await new Promise((resolve,reject)=>{
        fs.close(fd,(err)=>{
            if(err){
                reject(err)
                return
            }
             
            resolve('结束')
        })
    });


    return re
}

fn()
.then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.log(err)
})