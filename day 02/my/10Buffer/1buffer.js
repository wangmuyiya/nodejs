/* 
Buffer.alloc(size,fill)
*/

const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.allocUnsafe(20)
console.log(buf2)

const buf3 = Buffer.from('杨海祥')
const buf4 = Buffer.from('王珺')
// const buf5 = Buffer.from('王沐逸')
console.log(buf3)
console.log(buf4)
// console.log(buf5)

console.log(buf3.toString())
console.log(buf2.toString())