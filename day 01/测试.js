process.nextTick(()=>{
    console.log(111,'pro')
})
process.nextTick(()=>{
    console.log(444,'pro')
})
setTimeout(()=>{
    console.log(222)
    process.nextTick(()=>{
        console.log(333,'pro')
    })
})

// process.nextTick(()=>{
//     console.log(444,'pro')
// })