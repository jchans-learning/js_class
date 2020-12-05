const { doc } = require('prettier')

// 使用者出拳
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

// 結果呈現
const user = document.getElementById('user')
const opponent = document.getElementById('opponent')
const result = document.getElementById('result')

// 剪刀 = 1, 石頭 = 2, 石頭 = 3
const textArray = ['剪刀', '石頭', '布']

let.usrNumvber = 0

scissors.addEventListener('click', function () {
  const rand = Math.floor(Math.random() * 3) + 1

  usernumber = 1

  user.innerHTML = '你也出了！' textArray[userNumber - 2]
  computer.innerHTML"   
})
