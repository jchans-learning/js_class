const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 隨機產生一個1-6的整數
  const p = Math.floor(Math.random() * 6) + 1

  // 對照要呈現的圖示的fontawesome標記
  // <i class="fas fa-dice-one"></i>
  const diceTagArray = ['one', 'two', 'three', 'four', 'five', 'six']

  // 呈現 圖示
  dice.innerHTML = `<i class="fas fa-dice-${diceTagArray[p - 1]}"></i>`

  // 呈現 點數
  point.innerHTML = p + '點'
})
