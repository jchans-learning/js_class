const usDollar = document.getElementById('usDollar')
const twDollar = document.getElementById('twDollar')
const usdToTwd = document.getElementById('usdToTwd')
const twdToUsd = document.getElementById('twdToUsd')
const moneyDisplay = document.getElementById('moneyDisplay')

usdToTwd.addEventListener('click', function () {
  moneyDisplay.innerHTML = (+usDollar.value * 28.53).toFixed()
  document.getElementById('twDollar').value = moneyDisplay.innerHTML
  console.log(usDollar, twDollar, moneyDisplay)
})

twdToUsd.addEventListener('click', function () {
  moneyDisplay.innerHTML = (+twDollar.value / 28.53).toFixed(2)
  document.getElementById('usDollar').value = moneyDisplay.innerHTML
  console.log(usDollar, twDollar, moneyDisplay)
})

// 1 USD 美金 = 28.53 TWD 新台幣
