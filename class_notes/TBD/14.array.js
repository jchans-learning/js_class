const a = [
  1,
  2,
  function () {
    console.log('123')
  },
]

// undefined 比較是系統在用的詞， Null 一般來說是開發者用的詞，這沒有嚴格規定
const aaa = [1, , 3]
aaa[2]

a2 = [1, 2, 3]

const b = []
for (let i = 0; i < a2.length; i++) {
  b[i] = a2[i]
}

// 展開運算子 '...' ，寫法舉例，要在另一個陣列 c 裡展開 a2
// 寫法： '...a'
// 把裡面的元素展開，可以用來組合陣列
// 老師推薦使用
const c = [...a2]

// indexOf()
// 用於搜尋索引值
// 他是從所以值 0 的位置開始找，所以重複的元素比較後免得會找不到

const a3 = [1, 2, 3, 4, 5, 6, 7, 8, 3]

console.log(a3.indexOf(3))
console.log(a3.indexOf(8))

const iWantToFindThis = 3
const indexList = []
for (let i = 0; i < a3.length; i++) {
  if (a3[i] == iWantToFindThis) {
    indexList.push(i)
  }
}

// 最重要的四個方法
// pop
// push
// shift
// unshift

const a4 = [1, 2, 5]

// pop
// 移除陣列的最後一個元素
const popedValue = a4.pop()
console.log(a4)
console.log(popedValue)

// push
a4.push(7)
console.log(a4)

// shift
a4.shift(9)
console.log(a4)

// unshift
a4.unshift(6)
console.log(a4)

// slice
const a5 = [1, 2, 3, 4, 5]
console.log(a5.slice(3, 5))

// slice 可以用於淺拷貝，與展開運算子的作用比較
const b1 = a5.slice()
console.log(b1)
const b2 = [...a5]
console.log(b2)

// 字串，隱含字串陣列？
// 字串的很多方法都跟陣列很像
const a6 = 'Hello World'
const b3 = []

for (let i = 0; i < a6.length; i++) {
  b3.push(a6[i])
}

console.log(b3)

// split 用在特定規則的字串分割， String to Array 。常用在 csv 檔
// join 用在特定規則的字串結合， Array to String

// forEach 沒辦法提早結束或中斷
// 效力最高的是 for 迴圈，缺點是語法比較複雜
// 沒寫完，待練習
// const a7 = [1, 2, 3, 4, 5]

// for (let i = 0; i < a7.length; i++) {
//   console.log('index=', i, ' value=', a7[i])
// }

// a7.forEach( function (value, index, array) {
//     console.log('index=', index. ' value=' arraty )
// })

// Map 一定要會，在 React 會常用

// 今天講的部分，可以看老師寫的講義做
// https://eddy-chang.gitbook.io/javascript-start-from-es6/part3/array

// includes()
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// 老師 summary
// 一定要學好 Map
// push 和 unshift 很常用。成對的是 pop 和 shift
// filter ， find ， findIndex
// includes
