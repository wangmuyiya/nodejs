const http = require('http')

const url = 'http://192.168.1.30:3000'

const request = http.request(url,(response)=>{
    console.log(response)

    response.on('data',(chunk)=>{
        console.log(chunk.toString())
    })


    response.on('end',(chunk)=>{
        console.log('请求完毕')
    })
})


request.end('')