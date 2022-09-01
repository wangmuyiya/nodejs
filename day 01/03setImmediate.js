
// console.log('111')
// setImmediate(()=>{
//     console.log('222')
// })
// console.log('333')
// // 输出1，3，2  在同步执行之后  执行



console.log('111')
setImmediate(()=>{
    console.log('222')
})

process.nextTick(()=>{
    console.log('4444')
})
console.log('333')


// 1,3,4,2  process.nextTick() 微任务中最快得