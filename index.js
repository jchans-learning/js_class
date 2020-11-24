let a = 1 // 給定變數值之後，變數的資料類型就決定了

// const b = 1
// b = "hello"
// 常數再指定東西會報錯

console.log(a)
console.log(typeof a)

const c = [1, 2]
console.log(typeof c)
console.log(Array.isArray(c))

const c1 = [1, 2]
const d = c1
c1[0] = 3 // 常數裡的陣列的成員可以指定
console.log(c1)
console.log(d)

console.log('type of undefined is: ' + typeof undefined)
console.log('type of null is: ' + typeof null)

console.log('type of NaN is: ' + typeof NaN)
console.log("'hello'//1 " + '= ' + 'hello' / 1)

console.log(Math.PI)

const element = "I'm a student."
const a2 = 123

let b = 111

console.log('\n--------------\n\n')
console.log('Document Ended')
