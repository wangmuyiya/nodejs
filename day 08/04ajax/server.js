const express = require('express')

const {
    exec
} = require('child_process')

const path = require('path')

const etag = require('etag')

const fs = require('fs')

const {promisify} = require('util')

const app = express();

app.get('/',async (req,res)=>{
    const fillPath = path.resolve(__dirname,'./index.html')
    res.sendFile(fillPath)
 
 }) 


app.get('/login',(req,res)=>{


    const data= {
        mes:'ok',
        code:1
    }
    res.json(data)
})

app.listen('3000',(err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log('服务启动   http://192.168.1.30:3000');
    // exec('start http://192.168.1.30:3000')
})