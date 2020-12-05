// 這個檔案要解決補零的問題，還有數字大於 255 的部分
const color1 = document.getElementById('colorInput1')
const color2 = document.getElementById('colorInput2')
const color3 = document.getElementById('colorInput3')
const convertColorClicked = document.getElementById('convertColor')
const targetText = document.getElementById('target')

// 用一個函式，也就是 function ，來處理色碼補零的工作
// function 的定義參考：
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Functions
function decimal2Hex(num) {
  let hexString = num.toString(16)

  if (num.toString(16).length < 2) {
    hexString = '0' + num.toString(16)
  }

  return hexString
}

convertColorClicked.addEventListener('click', function () {
  let hexColor =
    '#' +
    decimal2Hex(+color1.value) +
    decimal2Hex(+color2.value) +
    decimal2Hex(+color3.value)

  console.log(hexColor)
  console.log(typeof hexColor)

  targetText.style.color = hexColor
})

// 參考資料：
//
// for 迴圈
//
// alert() 方法
// https://www.w3schools.com/jsref/met_win_alert.asp
//
// typeof 運算子
// 用來確認資料的類型，可用 console.log 印出來確認
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof
