const { JSDOM } = require('jsdom')
const { window } = new JSDOM('')
const $ = require('jquery')(window)



const arr = [1,2,3,4]
$.each(arr,(index,item)=>{
    console.log(item)

})


// const download = require('download-git-repo')
// download('github:wangmuyiya/nodejs','./test',err=>{
//     console.log(err? 'error':'success')
// })



// const download =   require('download-git-repo')
// const ora = require('ora')
// const process = ora('下载项目中...')
// process.start()
// download('github:wangmuyiya/nodejs','./test',err=>{
//     if(err){
//         process.fail()
//     }else{
//         process.succeed()
//     }
// })