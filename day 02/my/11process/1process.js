// console.log(process.argv)
// console.log(process.argv0)

const arr = process.argv

console.log(process.cwd())


if(arr[2]==='start'){
    console.log('开启服务')
}else if(arr[2]==='end'){
    console.log('关闭服务')
}else{
    console.log('请重新输入')
}


let i = 0
setInterval(()=>{
    console.log(i++)
    if(i>4){
        process.exit()
    }
},1000)