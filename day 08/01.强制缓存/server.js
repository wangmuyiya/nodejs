const express = require('express')

const {
    exec
} = require('child_process')

const path = require('path')

const fs = require('fs')

const app = express();

app.get('/',(req,res)=>{
    const fillPath = path.resolve(__dirname,'./index.html')
    // res.sendFile()//直接协商缓存
    const rs = fs.createReadStream(fillPath)
    rs.pipe(res)
 }) 


// app.get("/img", (req, res) => {
//     const filePath = path.resolve(__dirname, "./1.jpg");
//     const rs = fs.createReadStream(filePath);

//     res.set('Cache-Control','max-age=10000')
//     rs.pipe(res);
// })
app.listen('3000',(err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log('服务启动   http://192.168.1.30:3000');
    // exec('start http://192.168.1.30:3000')
})