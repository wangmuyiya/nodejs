const http = require('http')

const server = http.createServer(
    (request,response)=>{
        console.log('客户端请求')
        // console.log(request)
        // console.log(response)
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end('加油~~~')
    }
)


server.listen('3000','192.168.1.30',()=>{
    console.log('服务器启动！')
})
