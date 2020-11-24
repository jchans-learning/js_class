// 例子
// 取出 html 標籤內包含的東西
// document.getElementById('total').innerHTML

// 取出 html 標籤內包含的文字
// document.getElementById('total').innerText

// 指定一個值能改變標籤內的內容
// document.getElementById('total').innerHTML = 999

const total = document.getElementById('total')

total.addEventListener('click', function () {
  alert('click!!!')
})
