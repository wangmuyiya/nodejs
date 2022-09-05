const EventEmitter = require('events')

class myEmitter extends EventEmitter{}

const emitter = new myEmitter()

// emitter.on('myClick',()=>{
//     console.log('myClick被调用了')
// })


emitter.once('myClick',()=>{
    console.log('myClick被调用了')
})//一次性事件

setTimeout(()=>{
    emitter.emit('myClick')
    emitter.emit('myClick')
},1000)

