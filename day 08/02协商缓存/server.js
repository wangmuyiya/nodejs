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

    const ifNoneMatch = req.headers['if-none-match']
    const ifModifiedSince = req.headers['if-modified-since']
    const fillPath = path.resolve(__dirname,'./index.html')
    const rs = fs.createReadStream(fillPath)


    const stat = promisify(fs.stat)

    const fillDetail =await stat(fillPath)

    const fileTime = fillDetail.mtime.toGMTString()

    const fileEtag = etag(fillDetail)


    if(ifNoneMatch ===fileEtag && ifModifiedSince===fileTime){
        res.status(304).end()
    }

    res.set('ETag',fileEtag)
    res.set('Last-Modified',fileTime)

    rs.pipe(res)
    // res.sendFile(fillPath)//sendFile 把协商缓存 设置好了
 }) 


app.listen('3000',(err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log('服务启动   http://192.168.1.30:3000');
    // exec('start http://192.168.1.30:3000')
})