const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 隨機產生一個 1~6 的整數
  const p = Math.floor(Math.random() * 6) + 1

  console.log(p)
})

console.log(dice, point, start)

// let diceTag = ''

// Not finished, practice after class
