const total = document.getElementById('total')
const add = document.getElementById('add')
const sub = document.getElementById('sub')

add.addEventListener('click', function (event) {
  // 額外講解了這幾個性質，沒有聽很清楚
  // console.log(event.target)
  // console.log(this) // 誰呼叫了這個函式
  // console.log(total)

  total.innerHTML = +total.innerHTML + 1
})

sub.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML - 1
})
