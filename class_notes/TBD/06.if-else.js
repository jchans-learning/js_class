const num = document.getElementById('num')
const checkNumber = document.getElementById('checkNumber')
const checkResult = document.getElementById('checkResult')

document.getElementById('num').value = '請輸入數字'

checkNumber.addEventListener('click', function () {
  const numValue = +num.value
  let result = numValue

  if (numValue > 100) {
    result = 'num > 100'
  } else {
    result = 'num < 100'
  }

  checkResult.innerHTML = result

  console.log(numValue, result)
})
