// --------

// 函式定義
// function sum(a, b) {
//   console.log(arguments)
//   return a + b
// }

// 函式表達式
// const sum = function (a, b) {
//   return a + b
// }

// 其實這兩種表達式有一點差別

// 箭頭函式，一種函式表達式簡寫法，很受開發者歡迎
// const sum = (a, b) => a + b

// console.log(sum(322, 211))

// --------

const name = document.getElementById('name')
const tel = document.getElementById('tel')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')

// console.log(name, tel, address, username, password, password2, register)

register.addEventListener('click', function () {
  if (!name.value.trim()) {
    alert('姓名沒填')
    return
  }

  if (!tel.value.trim()) {
    alert('電話沒填')
    return
  }

  if (!address.value.trim()) {
    alert('地址沒填')
    return
  }

  if (password.value !== password2.value) {
    alert('兩次輸入的密碼不同')
  }
})
