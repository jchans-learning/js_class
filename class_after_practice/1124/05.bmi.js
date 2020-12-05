// 試著自己寫的作法
//
// 1. 獲得設定好的 id 的資料
// height
// weight
// calculateBMI
// bmiText
//
// 2. 按下「計算BMI」按鈕觸發運算
// 按鈕(id="calculateBMI")
// BMI = 體重(公斤) / 身高^2(公尺平方)

// 取得 height
const height = document.getElementById('height')

// 取得 weight
const weight = document.getElementById('weight')

// calculateBMI
const calculateBMI = document.getElementById('calculateBMI')

// bmiText
const bmiText = document.getElementById('bmiText')

// 按下「計算BMI」按鈕觸發運算
calculateBMI.addEventListener('click', function () {
  const h = +height.value
  const w = +weight.value

  // 計算計算 BMI = 體重(公斤) / 身高^2(公尺平方)
  const bmi = w / Math.pow(h / 100, 2)

  // 把算出來的 bmi 值印到 html
  bmiText.innerHTML = bmi.toFixed(1)
})

console.log(height, weight, calculateBMI, bmiText)
