const memberName = document.getElementById('memberName')
// const memberPhone = document.getElementById('memberPhone')
// const memberAddress = document.getElementById('memberAddress')
// const memberEmail = document.getElementById('memberEmail')
// const memberAccount = document.getElementById('memberAccount')
const memberPassword = document.getElementById('memberPassword')
const memberPasswordRecheck = document.getElementById('memberPasswordRecheck')
const register = document.getElementById('register')

const message = document.getElementById('message')

// .trimn() 頭尾去空白

register.addEventListener('click', function () {
  let error = ''

  // if (!memberName.value) {
  //   alert('姓名沒有填寫！')
  // }

  // if (memberPassword.value !== memberPasswordRecheck.value) {
  //   alert('兩次密碼輸入不同！')
  // }

  if (!memberName.value.trim()) error += ' 姓名沒填！'
  if (memberPassword.value !== memberPasswordRecheck.value)
    error += ' 兩次輸入密碼不同！'

  console.log(memberName, memberPassword, error)

  if (error) {
    message.innerHTML = error
  } else {
    message.innerHTML = '表單驗證通過'
  }
})

// 回去補練習
