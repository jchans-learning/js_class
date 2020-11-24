// 例子
// 取出 html 標籤內包含的東西
// document.getElementById('total').innerHTML

// 取出 html 標籤內包含的文字
// document.getElementById('total').innerText

// 指定一個值能改變標籤內的內容
// document.getElementById('total').innerHTML = 999

const total = document.getElementById('total')

// 事件監聽，用滑鼠點擊會出現「 click!!! 」字樣
// total.addEventListener('click', function () {
//   alert('click!!!')
// })

total.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
})

// HTML 到 JavaScript 一定是字串。
// JavaScript 到 HTML 會自動轉成字串。
