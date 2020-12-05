// moneyToConvert
// ntd2usd
// usd2ntd
// moneyConverted

const moneyToConvert = document.getElementById('moneyToConvert')
const ntd2usd = document.getElementById('ntd2usd')
const usd2ntd = document.getElementById('usd2ntd')
const moneyConverted = document.getElementById('moneyConverted')

console.log(moneyToConvert, ntd2usd, usd2ntd, moneyConverted)

// 1 USD 美金 = 28.53 TWD 新台幣
// toFixed() 方法會使用定點小數表示法（fixed-point notation）來格式化數字。
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

ntd2usd.addEventListener('click', function () {
  moneyConverted.innerHTML =
    +moneyToConvert.value +
    ' NTD is converted to ' +
    (+moneyToConvert.value / 28.53).toFixed(2) +
    ' USD'
})

usd2ntd.addEventListener('click', function () {
  moneyConverted.innerHTML =
    +moneyToConvert.value +
    ' USD is converted to ' +
    (+moneyToConvert.value * 28.53).toFixed(2) +
    ' NTD'
})
